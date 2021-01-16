const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');
module.exports = {
    addUser: async(req,res)=>{
        try {
            const {
                U_firstname, U_lastname,
                U_username, U_email,
                U_password,U_avatar,
                U_qualification,U_age, U_gender
            } = req.body;

            const user = new User(); 
            user.U_firstname = U_firstname
            user.U_lastname = U_lastname
            user.U_username = U_username
            user.U_email = U_email
            user.U_password = U_password
            user.U_avatar = U_avatar
            user.U_qualification = U_qualification
            user.U_age = U_age
            user.U_gender = U_gender
           
            await user.save((err, doc) => {
                if (!err)
                    res.json(user)
                else {
                     console.log(err);
                }
            });      
        } catch (err) {
            res.send(err)
            console.log(err);
        }
    }, 
    getUser: async(req, res) => {
        try{
            const user = await User.find();
            res.send(user);
        }catch(err){
        res.send(err)
        }
    }  
}