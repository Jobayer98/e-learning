const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Elearning", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
