const {
  showAllCourse,
  viewCourse,
} = require("../controllers/public.controller");
const express = require("express");

const router = express.Router();

router.get("/courses", showAllCourse);
router.get("/courses/:courseId", viewCourse);

module.exports = router;
