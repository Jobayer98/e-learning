const Course = require("../models/course.model");
const User = require("../models/user.model");

const users = async (req, res, next) => {
  try {
    const query = req.query;
    let allUser = await User.find(query);
    if(!allUser) {
      return res.status(404).json({ success: false, msg: "No users found" });
    }
    allUser =  allUser.filter((user) => user.role !== "admin");
    const totalUser = allUser.length;

    res.status(200).json({ success: true, totalUser, allUser });
  } catch (error) {
    next(error);
  }
};

const viewUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

// const deleteCourse = async (req, res, next) => {
//   try {
//     const course = await Course.findByIdAndDelete(req.params.courseId);

//     if (!course) {
//       return res.status(404).json({ success: false, msg: "No course found" });
//     }

//     res.status(200).json({ success: true, course });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  users,
  viewUser,
  deleteUser,
};
