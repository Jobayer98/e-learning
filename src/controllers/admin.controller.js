const Course = require("../models/course.model");
const deleteCourse = async (req, res, next) => {
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

moduel.exports = {
  deleteCourse,
};
