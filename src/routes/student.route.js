const express = require("express");

const router = express.Router();

// get student enrolled courses
router.route("/my-learning").get((req, res) => {
  res.send("Student all courses");
});

// enroll a new course
router.route("/add-course").post((req, res) => {
  res.send("Student add course");
});

// remove enrolled course
router.route("/remove-course").delete((req, res) => {
  res.send("Student remove course");
});

module.exports = router;
