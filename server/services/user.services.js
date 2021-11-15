const { User } = require("../models/user");
const { Admin } = require("../models/admin");

const findByEmail = async (email) => {
  return await User.findOne({ email });
};
const findByMobile = async (mobile) => {
  return await User.findOne({ mobile });
};

module.exports = { findByEmail, findByMobile };
