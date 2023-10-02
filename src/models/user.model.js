const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: function (password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        
        return passwordRegex.test(password);
      },
      message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }
  },
  role: {
    type: String,
    default: "student",
  },
  rating: {
    type: Number,
    default: 0,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// userSchema.virtual("courses", {
//   ref: "Course",
//   localField: "_id",
//   foreignField: "instructor",
// });

// hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

// remove password

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.rating;
  return userObject;
};

// compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generate token
userSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      role: this.role,
    },
    process.env.JWT_SECRET
  );

  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
