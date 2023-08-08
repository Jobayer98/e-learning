// external dependencies
const express = require("express");

// internal dependencies
const auth = require("../middlewares/auth.middleware");
const {
  enrollNewCourse,
  viewCourse,
  myCourses,
  giveReview,
  updateReview,
  deleteReview,
  unEnrollCourse,
} = require("../controllers/student.controller");

const router = express.Router();

// student routes
router.route("/my-learning").get(auth, myCourses);
router
  .route("/courses/:courseId")
  .get(auth, viewCourse)
  .post(auth, enrollNewCourse)
  .delete(auth, unEnrollCourse);

// review routes
router.route("/courses/:courseId/review").post(auth, giveReview);
router
  .route("/courses/:courseId/reviews/:reviewId")
  .patch(auth, updateReview)
  .delete(auth, deleteReview);

module.exports = router;
