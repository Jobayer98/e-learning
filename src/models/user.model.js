const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
