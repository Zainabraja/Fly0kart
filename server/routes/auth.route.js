const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
///api/auth/hello
router.post("/register", authController.register);
router.post("/signin", authController.signin);
router.post("/verifyOtp", authController.verifyOtp);
router.get("/isauth", auth(), authController.isauth);
router.get(
  "/adminPortal",
  auth("createAny", "adminPortal"),
  authController.adminPortal
);
module.exports = router;
