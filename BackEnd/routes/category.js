const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  upload.single("categoryImage"),
  addCategory
);
router.get("/getcategory", getCategories);
router.put(
  "/update",
  upload.array("categoryImage"),
  updateCategories
);
router.delete(
  "/delete",
  deleteCategories
);

module.exports = router;