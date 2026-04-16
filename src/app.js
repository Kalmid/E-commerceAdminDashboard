const express = require("express");
const sequelize = require("./config/database");
require("./models");

const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("Database connected Successfully!"))
  .catch((err) => console.error("DB Error:", err));

  sequelize.sync({ alter: true})
  .then(() => console.log("Tables synced successfully!"))
  .catch((err) => console.error("Sync Error:", err));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
