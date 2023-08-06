// external dependencies
const express = require("express");

// internal dependencies
const studentRouter = require("./routes/student.route");

const app = express();

// express middleware
app.use(express.json());
app.use("/api/v1/student", studentRouter);

module.exports = app;
