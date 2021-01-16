const express = require('express'); //importing express
var router = express.Router();
const courseController = require('../controllers/courseController')


router.route('/')
.get(courseController.getCourse)//to get all user
.post(courseController.addCourse)//to add user



module.exports = router;
