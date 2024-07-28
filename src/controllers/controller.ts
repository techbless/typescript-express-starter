/* eslint-disable no-restricted-syntax */
import { typeCheck } from 'type-check';
import ValidationException from "../exceptions/ValidationException";

export class Controller {
  assertType(object: any, requiredType: any) {
    let isPassed = true;
    const errorFields: Record<string, string> = {};

    for (const name in requiredType) {
      if (!typeCheck(requiredType[name], object[name])) {
        isPassed = false;
        errorFields[name] = requiredType[name].toLowerCase();
      }
    }

    if(isPassed) {
      return;
    }

    throw new ValidationException(JSON.stringify(errorFields));
  }
}

export default Controller;
