const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const adminAuth = require("../middlewares/adminAuth");

router.post("/register", adminController.register);
router.post("/signin", adminController.signin);
router.get("/isauth", adminAuth(), adminController.isauth);

module.exports = router;
