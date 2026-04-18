const bcrypt = require("bcrypt");
const sequelize = require("../config/database");
const { User } = require("../models");

const createUser = async () => {
  try {
    await sequelize.sync();

    const hashedPassword = await bcrypt.hash("user123", 10);

    await User.create({
      name: "Regular User",
      email: "user@example.com",
      password: hashedPassword,
      role: "user",
    });

    console.log("Regular user created");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createUser();