const load = require("dotenv").config();
if (load.error) throw load.error;
require('./models/db');                       //import MONGODB connction files
const express = require('express');                      // import  express
const bodyparser = require('body-parser');               // import  body-parser                    
const user = require('./routes/userRoute');    // import  userController                        
const course = require('./routes/courseRoute')
const university = require('./routes/universityRoute');    // import  userController                        
const app = express()                                    //Asigning express         
const cookieParser=require('cookie-parser')       

app.use(bodyparser.urlencoded({
    extended: true                          //Asigning bodyparser
}));
app.use(bodyparser.json());                   //Asigning json of bodyparser
app.use(cookieParser(process.env.COOKIE_SECRET));
app.get('/', (req, res) => {
  res.send('Hello World');                        //simple route for hello World
});


app.use('/user',user);        //  setting router 
app.use('/course',course);
app.use('/university',university);        //  setting router 
app.use('/user/auth',require('./routes/userAuthRoute')); 
app.use('/category',require('./routes/category')); 


const PORT = 3000;
app.listen(PORT,console.log(`Port is running on http://localhost:${PORT}`));