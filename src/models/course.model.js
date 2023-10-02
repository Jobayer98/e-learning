const mongoose = require("mongoose");
const { v4: uuid } = require('uuid');

const courseSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid(),
  },
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
    type: String,
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
    default: 0,
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  enrollStudents: {
    type: Number,
    default: 0,
  },
  enrolledByStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
      rating: Number,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
