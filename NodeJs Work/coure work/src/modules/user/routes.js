const express = require('express');

const userAuthRouter = express.Router();

//importing middleware functions
// const addUserMiddleware = require('./middleware');
// const getUserMiddleware = require('./middleware')
const {
  addUserMiddleware,
  getUserMiddleware
} = require('./middleware');

//importing controller functions
const {
  addUserController,
  getUserController
} = require('./controller');

userAuthRouter.post('/addUser',addUserMiddleware, addUserController);

userAuthRouter.get('/getUser',getUserMiddleware, getUserController);

module.exports = userAuthRouter;