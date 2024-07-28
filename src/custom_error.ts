class CustomError {
  status: number;
  message: string;
  additionalInfo: string;

  constructor(status: number, message: string, additionalInfo: string) {
    this.status = status;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}

export default CustomError;
