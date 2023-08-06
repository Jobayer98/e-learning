// external dependencies
const express = require("express");

// internal dependencies
const { signup, signin } = require("../controllers/auth.controller");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
