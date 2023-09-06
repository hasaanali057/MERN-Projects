const express = require('express');

const courseRouter = express.Router();

// importing middleware functions
const {
  addCourseMiddleware,
  getCourseMiddleware,
  postMultipleourses
} = require('./middleware');

//importing controller functions
const {
  addCourseController,
  getCourseController,
  postMultipleCourseController
} = require('./controller');

courseRouter.post('/addCourse', addCourseMiddleware, addCourseController);

courseRouter.get('/getCourse',getCourseMiddleware, getCourseController)

courseRouter.post('/PostMultipleCourses', postMultipleourses, postMultipleCourseController);

module.exports = courseRouter;