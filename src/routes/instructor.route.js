const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  myCourses,
  addCourse,
} = require("../controllers/instructor.controller");

const router = express.Router();

router.route("/course").post(auth, addCourse);
router.route("/mycourses").get(auth, myCourses);

module.exports = router;
