import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAriC8hBAebKI5YJjRT7qf_zR85FaPV_IU',
  authDomain: 'chat-web-app-e5484.firebaseapp.com',
  databaseURL: 'https://chat-web-app-e5484-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-e5484',
  storageBucket: 'chat-web-app-e5484.appspot.com',
  messagingSenderId: '505097642147',
  appId: '1:505097642147:web:05728d16a872ae6cb9df16',
};

const app = firebase.initializeApp(config);
