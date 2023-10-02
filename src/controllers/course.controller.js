const Course = require("../models/course.model");

const showAllCourse = async (req, res, next) => {
  try {
    const courses = await Course.find({}).select(
      "_id name price duration rating level"
    );

    if (!courses || courses.length === 0) {
      return res.status(404).json({ success: false, msg: "No courses found" });
    }
    const totalCourses = courses.length;
    res.status(200).json({ success: true, totalCourses, courses });
  } catch (error) {
    next(error);
  }
};

const showCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ success: false, msg: "No course found" });
    }
    res.status(200).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  showAllCourse,
  showCourse,
};
