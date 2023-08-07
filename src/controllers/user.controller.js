const Course = require("../models/course.model");

const enrollNewCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ success: false, msg: "No course found" });
    }

    course.enrolledByStudents.push(req.user._id);
    await course.save();

    res.status(200).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

const myCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ enrolledByStudents: req.user._id });
    if (!courses || courses.length === 0) {
      return res.status(404).json({ success: false, msg: "No courses found" });
    }
    res.status(200).json({ success: true, courses });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  enrollNewCourse,
  myCourses,
};
