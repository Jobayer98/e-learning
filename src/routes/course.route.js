// external dependencies
const express = require("express");

// internal dependencies
const {showAllCourse, showCourse} = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware");
const { enrollNewCourse } = require("../controllers/student.controller");

const router = express.Router();

// public course routes
router
    .route("/courses").get(showAllCourse)
router
    .route("/courses/:courseId").get(showCourse);

// student enroll course
router
    .route("/courses/:courseId")
    .post(auth, enrollNewCourse);

module.exports = router;