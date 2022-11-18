class CustomError {
  constructor(status, message, additionalInfo) {
    this.status = status;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}

export default CustomError;
