const { Admin } = require("../models/admin");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const findAdminbyEmail = async (email) => {
  const findAdmin = await Admin.findOne({ email: email });
  return findAdmin;
};

module.exports = { findAdminbyEmail };
