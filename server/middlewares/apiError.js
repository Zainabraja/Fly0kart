const mongoose = require("mongoose");
const httpStatus = require("http-status");

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.StatusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const statusCode = err.StatusCode;
  const message = err.message;
  res.status(statusCode).json({
    serverStatus: "error",
    statusCode,
    message,
  });
};

const convertToApiError = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message);
  }
  next(error);
};

module.exports = {
  ApiError,
  handleError,
  convertToApiError,
};
