const Course = require('../../models/courseSchema');

const addCourseController = async (req, res) => {
  try {
    const course = new Course({
      name: req.body.name,
      author: req.body.author,
      price: req.body.price,
      tags: req.body.tags
    })
    await course.save();
    return res.status(200).send("successful");
  } catch (error) {
    return res.status(500).send("Internal Server Error...");
  }
}

const getCourseController = async (req, res) => {
  try {
    const course = await Course.findOne({
      $and : [{
        'name': req.body.name
      }]
    });
    if(!course) res.status(404).send("Empty")
    else res.status(200).send(course)
  } catch (error) {
    return res.status(500).send("Internal Server Error...");
  }
}

const postMultipleCourseController = async (req, res) => {
  try {
    const courses = req.body;
    await Course.insertMany(courses);
    return res.status(200).send("successful");
  } catch (error) {
    return res.status(500).send("Internal Server Error...");
  }
}

module.exports = {
  addCourseController,
  getCourseController,
  postMultipleCourseController
}