const express = require('express'); //importing express
var router = express.Router();
const userController = require('../controllers/userController')


router.route('/')
.get(userController.getUser)//to get all user
.post(userController.addUser)//to add user



module.exports = router;
