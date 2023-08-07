const Course = require("../models/course.model");
const addCourse = async (req, res, next) => {
  const courseInfo = { ...req.body };
  try {
    const course = await Course.create(courseInfo);
    res.status(201).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

const myCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({});

    if (!courses) {
      return res.status(404).json({ success: false, msg: "No courses found" });
    }
    res.status(200).json({ success: true, courses });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  myCourses,
  addCourse,
};
