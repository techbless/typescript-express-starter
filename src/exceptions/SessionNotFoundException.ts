import CustomError from "../custom_error";

class SessionNotFoundException extends CustomError {
    constructor() {
        super(401, "NotAuthenticated", "세션이 존재하지 않습니다.");
    }
}

export default SessionNotFoundException;
