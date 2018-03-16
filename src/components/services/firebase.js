import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyAlfsU0kM8fM1_pJ_MY6LGvwP4nDOsMlBg',
  authDomain: 'tic-tac-toe-e8ede.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-e8ede.firebaseio.com',
  projectId: 'tic-tac-toe-e8ede',
  storageBucket: 'tic-tac-toe-e8ede.appspot.com',
  messagingSenderId: '830455401675'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();

export const providers = firebase.auth;