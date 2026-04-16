const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("Database connected Successfully!"))
  .catch((err) => console.error("DB Error:", err));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
