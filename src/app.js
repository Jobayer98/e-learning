// external dependencies
const express = require("express");

// internal dependencies
const authRouter = require("./routes/auth.route");
const studentRouter = require("./routes/student.route");
const instructorRouter = require("./routes/instructor.route");
const publicRouter = require("./routes/public.route");

const app = express();

// express middleware
app.use(express.json());
app.use("/api/v1", publicRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1", studentRouter);
app.use("/api/v1", instructorRouter);

//express error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = app;
