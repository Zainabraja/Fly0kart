const passport = require("passport");
const { ApiError } = require("./apiError");
const httpStatus = require("http-status");
const { roles } = require("../configs/roles");

const verify = (req, res, resolve, reject, rights) => async (err, admin) => {
  if (err || !admin) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized"));
  }
  req.admin = admin;
  ///
  if (rights.length) {
    const action = rights[0];
    const resource = rights[1];

    const permission = roles.can(req.admin.role)[action](resource);
    if (!permission.granted) {
      return reject(new ApiError(httpStatus.FORBIDDEN, "Unauthorized access"));
    }
    res.locals.permission = permission;
  }

  resolve();
};

const adminAuth =
  (...rights) =>
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwtAdmin",
        { session: false },
        verify(req, res, resolve, reject, rights)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };
module.exports = adminAuth;
