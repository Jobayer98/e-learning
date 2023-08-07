const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("Authentication failed");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next({ error: "Forbidden" });
  }
};

module.exports = auth;
