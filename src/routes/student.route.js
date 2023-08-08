const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const {
  enrollNewCourse,
  myCourses,
  giveReview,
  updateReview,
  deleteReview,
} = require("../controllers/student.controller");

// student routes
router.route("/my-learning").get(auth, myCourses);
router
  .route("/courses/:courseId")
  .post(auth, enrollNewCourse)
  .delete((req, res) => {
    res.send("Student remove course");
  });

// review routes
router.route("/courses/:courseId/review").post(auth, giveReview);
router
  .route("/courses/:courseId/reviews/:reviewId")
  .patch(auth, updateReview)
  .delete(auth, deleteReview);

module.exports = router;
