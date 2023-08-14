// external dependencies
const express = require("express");
const upload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

// internal dependencies
const authRouter = require("./routes/auth.route");
const studentRouter = require("./routes/student.route");
const instructorRouter = require("./routes/instructor.route");
const publicRouter = require("./routes/public.route");
const adminRouter = require("./routes/admin.route");

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  upload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1", publicRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1", studentRouter);
app.use("/api/v1", instructorRouter);
app.use("/api/v1", adminRouter);

//express error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = app;
