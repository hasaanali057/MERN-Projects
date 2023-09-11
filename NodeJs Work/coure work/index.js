const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const db = require('./src/mySqlModels');

// dotenv configurations
const dotenv = require('dotenv');
dotenv.config();

// const dbconnect = require ('./config/mongoConnection');
// dbconnect();

const Course = require('./src/models/courseSchema');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));// transform body to key=value form.

(async ()=> {
  try {
    await db.sequelize.sync(
      {
        alter: true
      }
    );
    console.log("DB connection Succcessful.");
  } catch ( err ){
    console.log(err);  
  } 
})();

//Vehicle related API calls
const vehicleRouter = require('./src/modules/vehicleData/routes');
app.use('/vehicle', vehicleRouter);

//Assign Vehicle to a User API Call
const assosiationRouter = require('./src/modules/assosiation/routes');
app.use('/assign', assosiationRouter);


//////////////MONGO APIS Commenting for now/////////////////////////////
// //User related API calls
// const userAuthRouter = require('./src/modules/user/routes');
// app.use('/userAuth', userAuthRouter);

// //Course related API calls
// const courseRouter = require('./src/modules/course/routes');
// app.use('/course', courseRouter)
////////////////////////////////////////////////////////////////////////



app.listen(process.env.PORT, () => {
  console.log(`Server Listening at PORT: ${ process.env.PORT }`);
});