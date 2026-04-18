const AdminJS = require("adminjs");
const AdminJSExpress = require('@adminjs/express');
const AdminJSSequelize = require("@adminjs/sequelize");

const {
  User,
  Category,
  Product,
  Order,
  OrderItem,
  Setting,
} = require("../models");

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

const admin = new AdminJS({
  rootPath: "/admin",
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            isVisible: false,
          },
        },
      },
    },
    Category,
    Product,
    Order,
    OrderItem,
    Setting,
  ],
});

const adminRouter = AdminJSExpress.buildRouter(admin);

module.exports = adminRouter;