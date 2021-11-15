const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middlewares/apiError");
const userService = require("./user.services");
const createUser = async (firstName, lastName, email, mobile) => {
  try {
    if (await User.emailTaken(email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    if (await User.mobileTaken(mobile)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Phone no already taken");
    }
    const user = new User({ firstName, lastName, email, mobile });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const signInWithEmailAndPhone = async (email, mobile) => {
  try {
    if (email) {
      const emailLength = email.length;
      if (emailLength > 0) {
        console.log(email);
        const user = await userService.findByEmail(email);

        if (!user) {
          throw new ApiError(httpStatus.UNAUTHORIZED, "sorry bad email");
        }

        return user;
      }
    }

    if (mobile) {
      const mobileLength = mobile.length;
      if (mobileLength > 0) {
        const user = await userService.findByMobile(mobile);

        if (!user) {
          throw new ApiError(httpStatus.UNAUTHORIZED, "sorry bad phone no");
        }
        return user;
      }
    }
  } catch (error) {
    throw error;
  }
};

const signinUserWithPhone = async (mobile) => {
  try {
    const user = await userService.findByMobile(mobile);

    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "sorry bad phone no");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const genAuthToken = (user) => {
  console.log(User);
  const token = user.generateAuthToken();
  return token;
};

module.exports = {
  createUser,
  genAuthToken,
  signInWithEmailAndPhone,
  signinUserWithPhone,
};
