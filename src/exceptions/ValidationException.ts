import CustomError from "../custom_error";

class ValidationException extends CustomError {
    constructor(validationJson: string) {
        super(400, "Invalid User Input", validationJson);
    }
}

export default ValidationException;
