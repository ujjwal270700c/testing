const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const University = mongoose.model('University');
module.exports = {
    adduniversity: async(req,res)=>{
        try {
            const {
                Us_name, Us_desc, Us_img, Us_ratings
            } = req.body;

            const university = new University(); 
            university.Us_name = Us_name
            university.Us_desc = Us_desc
            university.Us_img = Us_img
            university.Us_ratings = Us_ratings
            
            
           university
            await university.save((err, doc) => {
                if (!err)
                    res.json(university)
                else {
                     console.log(err);
                }
            });      
        } catch (err) {
            res.send(err)
            console.log(err);
        }
    }, 
    getuniversity: async(req, res) => {
        try{
            const university = await University.find();
            res.send(university);
            
        }catch(err){
        res.send(err)
        }
    }  
}