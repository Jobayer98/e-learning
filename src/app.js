// external dependencies
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const cors = require("cors");

const path = require('path');
const file = fs.readFileSync(path.join(__dirname, './swagger.yaml'), 'utf8');
const swaggerDocument = YAML.parse(file)

// all routes
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const courseRouter = require("./routes/course.route");

const app = express();

// express middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);

//express error handler
app.use((err, req, res, next) => {
  res.status(401).send(err.message);
  next();
});

module.exports = app;
