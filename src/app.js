const express = require("express");
const sequelize = require("./config/database");
require("./models");
const authRoutes = require("./routes/auth");
const adminRouter = require("./admin");
const { User, Product, Order } = require("./models");

const app = express();

app.use(express.json());
app.use("/api", authRoutes);
app.use("/admin", adminRouter);

sequelize.authenticate()
  .then(() => console.log("Database connected Successfully!"))
  .catch((err) => console.error("DB Error:", err));

  sequelize.sync({ alter: true})
  .then(() => console.log("Tables synced successfully!"))
  .catch((err) => console.error("Sync Error:", err));

  app.get("/api/stats", async (req, res) => {
  try {
    const users = await User.count();
    const products = await Product.count();
    const orders = await Order.count();

    res.json({
      users,
      products,
      orders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
