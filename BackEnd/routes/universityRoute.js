const express = require('express'); //importing express
var router = express.Router();
const universityController = require('../controllers/universityController')


router.route('/')
.get(universityController.getuniversity)//to get all user
.post(universityController.adduniversity)//to add user



module.exports = router;
