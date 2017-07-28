/* @flow */
import { LOGIN_USER_SUCCESS } from '../actions/types';

export default (state: Object = {}, action: Object) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return null;
    default:
      return null;
  }
};
