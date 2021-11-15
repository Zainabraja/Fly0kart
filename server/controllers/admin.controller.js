const httpStatus = require("http-status");
const { Admin } = require("../models/admin");
const { adminAuthService } = require("../services");
const adminController = {
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const admin = await adminAuthService.createAdmin(
        firstName,
        lastName,
        email,
        password
      );
      const token = await adminAuthService.generateAuthToken(admin);
      res
        .cookie("w_admin_auth", token)
        .status(httpStatus.CREATED)
        .send({ admin, token });
    } catch (error) {
      next(error);
    }
  },
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      const admin = await adminAuthService.signinWithEmailandPassword(
        email,
        password
      );
      const token = await adminAuthService.generateAuthToken(admin);
      res.cookie("w_admin_auth", token).send({ admin, token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  async isauth(req, res, next) {
    try {
      res.json(req.admin);
    } catch (error) {}
  },
};
module.exports = adminController;
