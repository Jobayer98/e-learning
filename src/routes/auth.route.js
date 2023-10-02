// external dependencies
const express = require("express");

// internal dependencies
const { signup, signin, logoutAll } = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/auth/signup").post(signup);
router.route("/auth/signin").post(signin);
router.route("/auth/logout").post(auth, logoutAll);
router.route("/auth/reset-password").post();

module.exports = router;
