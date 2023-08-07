const Course = require("../models/course.model");
const addCourse = async (req, res, next) => {
  const courseInfo = { ...req.body };
  try {
    const course = await Course.create({
      ...courseInfo,
      instructor: req.user._id,
    });
    res.status(201).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

const myCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ instructor: req.user._id });
    // await req.user.populate("courses");
    if (!courses || courses.length === 0) {
      return res.status(404).json({ success: false, msg: "No courses found" });
    }
    res.status(200).json({ success: true, courses });
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "description",
    "price",
    "image",
    "category",
    "duration",
    "level",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ success: false, msg: "Invalid updates" });
  }

  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ success: false, msg: "No course found" });
    }

    updates.forEach((update) => (course[update] = req.body[update]));
    const updatedCourse = await course.save();

    res.status(200).json({ success: true, course: updatedCourse });
  } catch (error) {
    next(error);
  }
};

const removeCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.courseId);

    if (!course) {
      return res.status(404).json({ success: false, msg: "No course found" });
    }

    res.status(200).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  myCourses,
  addCourse,
  updateCourse,
  removeCourse,
};
