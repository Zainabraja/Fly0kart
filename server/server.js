const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const routes = require("./routes");
const passport = require("passport");
const { jwtStrategy } = require("./middlewares/passport");
const { jwtAdminStrategy } = require("./middlewares/adminPassport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { handleError, convertToApiError } = require("./middlewares/apiError");
const mongoUri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
////cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

///body parser
app.use(express.json());

///sanitize
app.use(xss());
app.use(mongoSanitize());

///passport
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);
passport.use("jwtAdmin", jwtAdminStrategy);

///routes
app.use("/api", routes);
/// HANDLE ERORR
///if the error not recognized.....covert to api error
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
