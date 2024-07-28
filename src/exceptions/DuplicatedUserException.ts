import CustomError from "../custom_error";

class DuplicatedUserException extends CustomError {
    constructor() {
        super(400, "중복된 유저가 있습니다.", "다른 아이디를 선택해주세요.");
    }
}

export default DuplicatedUserException;
