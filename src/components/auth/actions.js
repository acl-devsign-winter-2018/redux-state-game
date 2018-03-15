import { auth } from '../../services/firebase';
import { USER_SET } from './reducers';

export function listenForUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) user.name = user.email.split('@')[0];
      dispatch({
        type: USER_SET,
        payload: user
      });
    });
  };
}

export function signup({ email, password }) {
  return () => auth.createUserWithEmailAndPassword(email, password);
}

export function signin({ email, password }) {
  return () => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return () => auth.signOut();
}