const Course = require("../models/course.model");
const { calculateAverageRating } = require("../utils/calculateAverageRating");

const giveReview = async (req, res, next) => {
    const userReviews = Object.keys(req.body);
    const reviewAllowed = ["text", "rating"];
    const isValidOperation = userReviews.every((userReview) =>
      reviewAllowed.includes(userReview)
    );
  
    if (!isValidOperation) {
      return res.status(400).json({
        success: false,
        msg: "Invalid user review only text and rating are allowed",
      });
    }
  
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ success: false, msg: "No course found" });
      }
  
      const containReview = {
        user: req.user._id,
        text: req.body.text,
        rating: Number(req.body.rating),
      };
  
      course.reviews.push(containReview);
      const review = await course.save();
  
      // Calculate average rating
      calculateAverageRating(course);
  
      res.status(201).json({ success: true, review });
    } catch (error) {
      next(error);
    }
  };
  
  const updateReview = async (req, res, next) => {
    const userReviews = Object.keys(req.body);
    const reviewAllowed = ["text", "rating"];
    const isValidOperation = userReviews.every((userReview) =>
      reviewAllowed.includes(userReview)
    );
  
    if (!isValidOperation) {
      return res.status(400).json({
        success: false,
        msg: "Invalid user review only text and rating are allowed",
      });
    }
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ success: false, msg: "No course found" });
      }
  
      const reviewIndex = course.reviews.findIndex((review) => {
        return review._id.toString() === req.params.reviewId;
      });
  
      if (reviewIndex === -1) {
        return res.status(404).json({ success: false, msg: "No review found" });
      }
      course.reviews[reviewIndex].text = req.body.text;
      course.reviews[reviewIndex].rating = Number(req.body.rating);
  
      await course.save();
  
      // Calculate average rating
      calculateAverageRating(course);
  
      res
        .status(200)
        .json({ success: true, review: course.reviews[reviewIndex] });
    } catch (error) {
      next(error);
    }
  };
  
  const deleteReview = async (req, res, next) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ success: false, msg: "No course found" });
      }
  
      const reviewIndex = course.reviews.findIndex(
        (review) => review._id.toString() === req.params.reviewId
      );
  
      if (reviewIndex === -1) {
        return res.status(404).json({ success: false, msg: "No review found" });
      }
  
      course.reviews.splice(reviewIndex, 1);
      await course.save();
  
      // Calculate average rating
      if (course.reviews.length !== 0) {
        calculateAverageRating(course);
      }
  
      res.status(200).json({ success: true, msg: "Review deleted" });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    giveReview,
    updateReview,
    deleteReview,
  };
  