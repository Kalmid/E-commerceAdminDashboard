const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

//Test DB connection
sequelize.authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("DB Error:", err));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});