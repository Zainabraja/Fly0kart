const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: false,
    maxLength: 10,
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  firstName: {
    type: String,
    maxLength: 100,
    trim: true,
    default: "",
  },

  lastName: {
    type: String,
    maxLength: 100,
    trim: true,
    default: "",
  },
  history: {
    type: Array,
    default: [{}],
  },
  varified: { type: Boolean, default: false },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

{
  /*userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified("mobile")) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.mobile, salt);
    user.mobile = hash;
  }

  next();
}); */
}

userSchema.methods.generateAuthToken = function () {
  let user = this;
  const userObj = { sub: user._id.toHexString() };
  const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: "1d" });
  return token;
};
userSchema.statics.emailTaken = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};
userSchema.statics.mobileTaken = async function (mobile) {
  const user = await this.findOne({ mobile });
  return !!user;
};
const User = mongoose.model("User", userSchema);
module.exports = { User };
