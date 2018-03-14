import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyAbfk546OMbDpnT1e3_o5cAnPjhRdELpuk',
  authDomain: 'redux-game-9ed6b.firebaseapp.com',
  databaseURL: 'https://redux-game-9ed6b.firebaseio.com',
  projectId: 'redux-game-9ed6b',
  storageBucket: '',
  messagingSenderId: '753102463477'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const storage = firebase.storage();
export const auth = firebaseApp.auth();

export const providers = firebase.auth;