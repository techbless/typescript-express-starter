import CustomError from "../custom_error.js";

function errorHandler(err, _req, res, _next) {
  let customError = err;

  if (!(err instanceof CustomError)) {
    if (process.env.NODE_ENV == "development") {
      customError = new CustomError(
        500,
        err.message ||
          "Oh no, this is embarrasing. We are having troubles my friend",
        err.name || "No additional information"
      );
    } else {
      customError = new CustomError(
        500,
        "Oh no, this is embarrasing. We are having troubles my friend",
        "No Additional Information, Please contact to the manager."
      );
    }
  }

  console.log(err);
  res.status(customError.status || 500);
  res.json(customError);
}

export default errorHandler;
