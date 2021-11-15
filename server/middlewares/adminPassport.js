const { Admin } = require("../models/admin");
require("dotenv").config();

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const jwytOptions = {
  secretOrKey: process.env.DB_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    const admin = await Admin.findById(payload.sub);
    if (!admin) {
      return done(null, false);
    }
    done(null, admin);
  } catch (error) {
    done(error, false);
  }
};

const jwtAdminStrategy = new JwtStrategy(jwytOptions, jwtVerify);

module.exports = { jwtAdminStrategy };
