import CustomError from "../custom_error";

class NotAuthenticatedException extends CustomError {
    constructor() {
        super(401, "NotAuthenticated", "인증에 실패하였습니다. 먼저 로그인이 필요합니다.");
    }
}

export default NotAuthenticatedException;
