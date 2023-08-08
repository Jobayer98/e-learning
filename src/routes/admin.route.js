const express = require("express");

// internal dependencies
const isAdmin = require("../middlewares/isAdmin.middleware");
const deleteCourse = require("../controllers/admin.controller");

const router = express.Router();

router.route("/courses/:courseId").delete(auth, isAdmin, deleteCourse);
