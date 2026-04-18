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
        isVisible: ({ currentAdmin }) =>
        currentAdmin && currentAdmin.role === "admin",
      },
    },
    Category,
    Product,
    Order,
    OrderItem,
    {
      resource: Setting,
      options: {
        isVisible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "admin",
      },
    },
  ],
});

const bcrypt = require("bcrypt");

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } });

      if (user) {
        const matched = await bcrypt.compare(password, user.password);

        if (matched) return user;
      }

      return null;
    },
    cookieName: "adminjs",
    cookiePassword: "supersecretcookie",
  },
  null,
  {
    resave: false,
    saveUninitialized: true,
  }
);

module.exports = adminRouter;