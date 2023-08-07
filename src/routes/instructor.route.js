const express = require("express");
const auth = require("../middlewares/auth.middleware");
const isInstructor = require("../middlewares/isInstructor.middleware");
const {
  myCourses,
  addCourse,
} = require("../controllers/instructor.controller");

const router = express.Router();

router.route("/course").post(auth, isInstructor, addCourse);
router.route("/mycourses").get(auth, isInstructor, myCourses);

module.exports = router;
