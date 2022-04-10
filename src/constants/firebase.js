const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyD-QNpKdrsA75eVvyAGACkYreA_2M-lcHU",
  authDomain: "comp307-finalproject-w2022.firebaseapp.com",
  projectId: "comp307-finalproject-w2022",
  storageBucket: "comp307-finalproject-w2022.appspot.com",
  messagingSenderId: "750582608237",
  appId: "1:750582608237:web:bc15219b74da9224372a64",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
