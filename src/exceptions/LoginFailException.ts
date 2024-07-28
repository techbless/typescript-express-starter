import CustomError from "../custom_error";

class LoginFailException extends CustomError {
    constructor(message: string) {
        super(401, "NotAuthenticated", message);
    }
}

export default LoginFailException;
