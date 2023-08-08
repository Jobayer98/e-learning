const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const {
  enrollNewCourse,
  myCourses,
  giveReview,
  updateReview,
} = require("../controllers/student.controller");

// get student enrolled courses
router.route("/my-learning").get(auth, myCourses);

// enroll a new course
router
  .route("/courses/:courseId")
  .post(auth, enrollNewCourse)
  .delete((req, res) => {
    res.send("Student remove course");
  });

router.route("/courses/:courseId/review").post(auth, giveReview);
router.route("/courses/:courseId/reviews/:reviewId").patch(auth, updateReview);

module.exports = router;
