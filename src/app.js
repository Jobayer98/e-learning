// external dependencies
const express = require("express");

// all routes
const authRouter = require("./routes/auth.route");
const studentRouter = require("./routes/student.route");
const instructorRouter = require("./routes/instructor.route");
const publicRouter = require("./routes/public.route");
const adminRouter = require("./routes/admin.route");

const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", publicRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", studentRouter);
app.use("/api/v1", instructorRouter);
app.use("/api/v1", adminRouter);

//express error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = app;
