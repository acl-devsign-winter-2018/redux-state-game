import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyBG3dW2288lVtdRS251ELOgp_Ai_DZGhnw',
  authDomain: 'state-game-65cfa.firebaseapp.com',
  databaseURL: 'https://state-game-65cfa.firebaseio.com',
  projectId: 'state-game-65cfa',
  storageBucket: 'state-game-65cfa.appspot.com',
  messagingSenderId: '407430903082'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const storage = firebase.storage();
export const auth = firebaseApp.auth();

export const providers = firebase.auth;