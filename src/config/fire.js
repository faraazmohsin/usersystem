import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBW-b7wceJiw_jlUl8ApoxHCSvk5RpDN6g",
    authDomain: "usersystem-app.firebaseapp.com",
    databaseURL: "https://usersystem-app-default-rtdb.firebaseio.com",
    projectId: "usersystem-app",
    storageBucket: "usersystem-app.appspot.com",
    messagingSenderId: "25459789674",
    appId: "1:25459789674:web:49b1a35897a95cbcdf9f13"
  };

  const fire = firebase.initializeApp(config);
  export default fire;