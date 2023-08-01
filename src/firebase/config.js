import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA05DtfFNLbPphtwADI7-I2Zxp3EbSEihY",
  authDomain: "bcb86demo.firebaseapp.com",
  projectId: "bcb86demo",
  storageBucket: "bcb86demo.appspot.com",
  messagingSenderId: "441401418536",
  appId: "1:441401418536:web:29dbae4c1268bd40f7261d",
  measurementId: "G-MRS0G28VTS"
};

export const Firebase = firebase.initializeApp(firebaseConfig)
