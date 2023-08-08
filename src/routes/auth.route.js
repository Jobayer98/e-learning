// external dependencies
const express = require("express");

// internal dependencies
const { signup, signin, logoutAll } = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logoutAll").post(auth, logoutAll);

module.exports = router;
