const express = require('express'); //importing express
var router = express.Router();
const passport=require('../middlewares/passport');
const {giveToken}=require('../controllers/userAuth')


router.use(passport.initialize());

router.post('/',passport.authenticate("local", { session: false, failureMessage:true}),giveToken)

module.exports = router;
