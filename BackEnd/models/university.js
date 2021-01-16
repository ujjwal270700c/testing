const mongoose = require('mongoose');  //importing mongoose

//universitySchema for user
var universitySchema = new mongoose.Schema({
    Us_name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,   
    },
    Us_desc:String,
    Us_img: String,
    Us_ratings: {
      type:String,
    },
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course'
        }
    ]

    

});


mongoose.model('University', universitySchema); //exporting schema
