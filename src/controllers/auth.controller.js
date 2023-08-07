const User = require("../models/user.model");
const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please enter all fields" });
    }

    const user = await User.create({ name, email, password });

    const token = await user.generateToken();

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please enter all fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: "Account does not exist" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid credentials" });
    }

    const token = await user.generateToken();

    res.status(200).json({ success: true, user, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};
