const httpStatus = require("http-status");
const { Admin } = require("../models/admin");
const { ApiError } = require("../middlewares/apiError");
const { NOT_EXTENDED } = require("http-status");
const adminService = require("./admin.service");

const createAdmin = async (firstName, lastName, email, password) => {
  try {
    if (await Admin.emailTaken(email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "email Already taken");
    }
    const admin = new Admin({ firstName, lastName, email, password });
    await admin.save();
    return admin;
  } catch (Error) {
    console.log(Error);
    throw Error;
  }
};

const generateAuthToken = (admin) => {
  const token = admin.generateAuthToken();
  return token;
};

const signinWithEmailandPassword = async (email, password) => {
  try {
    const admin = await adminService.findAdminbyEmail(email);

    if (!admin) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "sorry bad email");
    }

    if (!(await admin.compareAdminPassword(password))) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "sorry bad password");
    }
    return admin;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = { createAdmin, generateAuthToken, signinWithEmailandPassword };
