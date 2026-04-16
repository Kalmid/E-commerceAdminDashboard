const bcrypt = require("bcrypt");
const sequelize = require("../config/database");
const { User } = require("../models");

const createAdmin = async () => {
  try {
    await sequelize.sync();

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin user created");
    process.exit();
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();