const express = require("express");

// internal dependencies
const auth = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const {
  deleteCourse,
  users,
  viewUser,
  deleteUser,
} = require("../controllers/admin.controller");

const router = express.Router();

router.route("/users").get(auth, isAdmin, users);
router
  .route("/users/:userId")
  .get(auth, isAdmin, viewUser)
  .delete(auth, isAdmin, deleteUser);

router.route("/courses/:courseId").delete(auth, isAdmin, deleteCourse);

module.exports = router;
