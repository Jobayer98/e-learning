const express = require('express');

// internal dependencies
const auth = require("../middlewares/auth.middleware");
const isInstructor = require("../middlewares/isInstructor.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const {myCourse, myCourses, unEnrollCourse} = require("../controllers/student.controller");
const {users,viewUser,deleteUser,} = require("../controllers/admin.controller");
const {giveReview, updateReview, deleteReview} = require("../controllers/review.controller")
const {addCourse, instructorCourses, updateCourse, removeCourse} = require("../controllers/instructor.controller")

const router = express.Router();

// admin routes
router
  .route("/users")
  .get(auth, isAdmin, users);
router
  .route("/users/:userId")
  .get(auth, isAdmin, viewUser)
  .delete(auth, isAdmin, deleteUser);

// user dashboard routes
router
    .route("/dashboard")
    .get(auth)
    .patch(auth)
    .delete(auth)


// student enrolled courses
router
  .route("/my-courses")
  .get(auth, myCourses);
router
  .route("/my-courses/:courseId")
  .get(auth, myCourse)
  .delete(auth, unEnrollCourse);


// create, update, delete course routes by an instructor
router
  .route("/instructor/course")
  .post(auth, isInstructor, addCourse);
router
  .route("/instructor/courses")
  .get(auth, isInstructor, instructorCourses);
router
    .route("/instructor/courses/:courseId")
    .patch(auth, isInstructor, updateCourse)
    .delete(auth, isInstructor, removeCourse);


// review routes
router
    .route("/my-courses/:courseId/review")
    .post(auth, giveReview);
router
    .route("/my-courses/:courseId/reviews/:reviewId")
    .patch(auth, updateReview)
    .delete(auth, deleteReview);

module.exports = router