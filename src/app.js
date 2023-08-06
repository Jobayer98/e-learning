const express = require("express");

const app = express();

// express middleware
app.use(express.json());

module.exports = app;
