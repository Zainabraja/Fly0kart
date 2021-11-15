const express = require("express");
const authRoute = require("./auth.route");
const router = express.Router();
const adminRoute = require("./admin.route");

const routesIndex = [
  {
    path: "/admin",
    route: adminRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];
routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
