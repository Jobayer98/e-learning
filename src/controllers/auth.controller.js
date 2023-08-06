const User = require("../models/user.model");
const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: flase, msg: "Please enter all fields" });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
};
