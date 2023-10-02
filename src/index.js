// external dependencies
require("dotenv").config();

// internal dependencies
require("./config/db");
const app = require("./app");

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
