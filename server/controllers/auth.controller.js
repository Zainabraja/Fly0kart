const { authService } = require("../services");
const httpStatus = require("http-status");
const { signInWithEmailAndPhone } = require("../services/auth.service");
const { User } = require("../models/user");
require("dotenv").config();

const authController = {
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, mobile } = req.body;
      const user = await authService.createUser(
        firstName,
        lastName,
        email,
        mobile
      );
      const token = await authService.genAuthToken(user);
      res.cookie("w_auth", token).status(httpStatus.CREATED).send({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
  async signin(req, res, next) {
    try {
      const mobile = req.body.mobile;
      const channel = req.body.channel;
      const email = req.body.email;

      const user = await authService.signInWithEmailAndPhone(email, mobile);

      const TwilioClient = require("twilio")(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      TwilioClient.verify
        .services(process.env.TWILIO_SERVICE_ID)
        .verifications.create({
          to: `+91${mobile}`,
          channel: channel,
        })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((error) => {
          if (error.status === 429) {
            res.status(httpStatus.TOO_MANY_REQUESTS).send({
              code: error.code,
              message: error.message,
              status: error.status,
            });
          }
          res.status(error.status).send({
            code: error.code,
            message: error.message,
            status: error.status,
          });
        });
      {
        /*const email = req.body.email;
      const password = req.body.password;
       */
      }
    } catch (error) {
      next(error);
    }
  },
  async verifyOtp(req, res, next) {
    try {
      const mobile = req.body.mobile;
      const email = "";
      const code = req.body.code;
      const user = await authService.signinUserWithPhone(mobile);

      const TwilioClient = require("twilio")(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      TwilioClient.verify
        .services(process.env.TWILIO_SERVICE_ID)
        .verificationChecks.create({
          to: `+91${mobile}`,
          code: code,
        })
        .then((data) => {
          const TwilioData = {
            status: data.status,
            valid: data.valid,
          };
          if (data.valid === true) {
            const token = user.generateAuthToken(user);
            res.cookie("w_auth", token).status(200).send({
              user,
              token,
            });
          } else {
            res.status(200).send({
              TwilioData,
            });
          }
        })
        .catch((error) => {
          console.log(error.status);
          res.status(error.status).send({
            code: error.code,
            message: error.message,
            status: error.status,
          });
        });
    } catch (error) {
      next(error);
    }
  },
  async isauth(req, res, next) {
    try {
      res.json(req.user);
    } catch (error) {}
  },
  async adminPortal(req, res, next) {
    try {
      res.json({ ok: "yes" });
    } catch (error) {}
  },
};

module.exports = authController;
