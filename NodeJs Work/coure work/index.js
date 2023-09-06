const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('underscore');

// dotenv configurations
const dotenv = require('dotenv');
dotenv.config();

const dbconnect = require ('./mongoConnection');
dbconnect();

const Course = require('./src/models/courseSchema');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));// transform body to key=value form.

//User related API calls
const userAuthRouter = require('./src/modules/user/routes');
app.use('/userAuth', userAuthRouter);

//Course related API calls
const courseRouter = require('./src/modules/course/routes');
app.use('/course', courseRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server Listening at PORT: ${ process.env.PORT }`);
});