const mongoose = require('mongoose');
const Course = mongoose.model('Course');
module.exports = {
    addCourse: async(req,res)=>{
        try {
            const {
                C_id, C_name,
                C_desc, C_img,
                C_rating,C_reviews,
                C_duration,Users, Universities
            } = req.body;

            const course = new Course(); 
            course.C_id = C_id
            course.C_name = C_name
            course.C_desc = C_desc
            course.C_img = C_img
            course.C_rating = C_rating
            course.C_reviews = C_reviews
            course.C_duration = C_duration
            course.Users = Users
            course.Universities = Universities
           
            await course.save((err, doc) => {
                if (!err)
                    res.json(course)
                else {
                     console.log(err);
                }
            });      
        } catch (err) {
            res.send(err)
            console.log(err);
        }
    }, 
    getCourse: async(req, res) => {
        try{
            const course = await Course.find();
            res.send(course);
        }catch(err){
        res.send(err)
        }
    }  
}