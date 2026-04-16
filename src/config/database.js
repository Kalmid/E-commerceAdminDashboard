const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce_db", "postgres", "1234", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;