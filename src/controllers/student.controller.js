const Course = require("../models/course.model");

const myCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({
      enrolledByStudents: req.user._id,
    }).select("name price duration rating level");
    const totalCourse = courses.length;
    if (!courses || totalCourse === 0) {
      return res.status(404).json({ success: false,totalCourse, msg: "No courses found" });
    }
    const enrolledCourses = courses.length;
    res.status(200).json({ success: true, enrolledCourses, courses });
  } catch (error) {
    next(error);
  }
};

const myCourse = async (req, res, next) => {
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

const unEnrollCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ success: false, msg: "No course found" });
    }

    const index = course.enrolledByStudents.indexOf(req.user._id);

    if (index === -1) {
      return res
        .status(400)
        .json({ success: false, msg: "You are not enrolled in this course" });
    }

    course.enrolledByStudents.splice(index, 1);
    await course.save();
    res.status(200).json({ success: true, msg: "Course unenrolled" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  myCourse,
  myCourses,
  enrollNewCourse,
  unEnrollCourse,
};
