const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  //   image: {
  //     type: String,
  //     trim: true,
  //     required: true,
  //   },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  level: {
    type: String,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  enrollStudents: {
    type: Number,
    required: true,
  },
  enrolledByStudents: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  timestamps: true,
});

module.exports = mongoose.model("Course", courseSchema);
