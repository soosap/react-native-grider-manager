/* @flow */
import firebase from 'firebase';

import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../types';

const loginUser = ({ email, password }: Object) => (dispatch: Function) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFailure(dispatch));
    });
};

const loginUserSuccess = (dispatch: Function, user: Object) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFailure = (dispatch: Function) => {
  dispatch({ type: LOGIN_USER_FAILURE });
};

export default loginUser;
