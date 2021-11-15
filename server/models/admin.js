const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    maxlength: 100,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    maxlength: 100,
    trim: true,
    default: "",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "admin",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.pre("save", async function (next) {
  let admin = this;
  if (admin.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(admin.password, salt);
    admin.password = hash;
  }

  next();
});

adminSchema.statics.emailTaken = async function (email) {
  const admin = await this.findOne({ email });
  return !!admin;
};

adminSchema.methods.generateAuthToken = function () {
  let admin = this;
  const adminObj = { sub: admin._id.toHexString() };
  const token = jwt.sign(adminObj, process.env.DB_SECRET, { expiresIn: "1d" });
  return token;
};

adminSchema.methods.compareAdminPassword = async function (candiadtePassword) {
  let admin = this;

  const match = await bcrypt.compare(candiadtePassword, admin.password);

  return match;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = { Admin };
