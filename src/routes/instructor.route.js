const express = require("express");
const auth = require("../middlewares/auth.middleware");
const isInstructor = require("../middlewares/isInstructor.middleware");
const {
  myCourses,
  addCourse,
  updateCourse,
  removeCourse,
} = require("../controllers/course.controller");

const router = express.Router();

router.route("/course").post(auth, isInstructor, addCourse);
router.route("/courses").get(auth, isInstructor, myCourses);
router
  .route("courses/:courseId")
  .patch(auth, isInstructor, updateCourse)
  .delete(auth, isInstructor, removeCourse);

module.exports = router;
