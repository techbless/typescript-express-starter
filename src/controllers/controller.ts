/* eslint-disable no-restricted-syntax */
import { typeCheck } from 'type-check';

export class Controller {
  assertType(object: any, requiredType: any) {
    for (const name in requiredType) {
      if (!typeCheck(requiredType[name], object[name])) {
        throw TypeError(`${name}[${object[name]}] must be ${requiredType[name].toLowerCase()} type.`);
      }
    }
  }
}

export default Controller;
