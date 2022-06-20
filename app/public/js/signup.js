
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from '@firebase/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyB57R12xoRzBqAao8Jk0P9Mr5xTOoaIW4s",
//   authDomain: "task-user-athentication.firebaseapp.com",
// //   projectId: "task-user-athentication",
// //   storageBucket: "task-user-athentication.appspot.com",
// //   messagingSenderId: "285519778988",
// //   appId: "1:285519778988:web:3290cb45511dd9d72bbb09",
// //   measurementId: "G-5D4Q4EPYWS"
// // };

// // // Initialize Firebase
// // const firebase = initializeApp(firebaseConfig);


// const emailField = document.getElementById('email_field');
// const passwordField = document.getElementById('password_field');
// const signUp = document.getElementById('signUp');
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user
//     console.log('Signed Up Successfully !');
//   }).
//   catch((error)=>{
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   })

// const signUpFunction = () => {
//     const email = emailField.value;
//     const password = passwordField.value;

//     auth.createUserWithEmailAndPassword(email, password)
//     .then(() => {
//         console.log('Signed Up Successfully !');
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }

// signUp.addEventListener('onclick', signUpFunction);


// Your web app's Firebase configuration


var firebaseConfig = {
    apiKey: "AIzaSyB57R12xoRzBqAao8Jk0P9Mr5xTOoaIW4s",
    authDomain: "task-user-athentication.firebaseapp.com",
    projectId: "task-user-athentication",
    storageBucket: "task-user-athentication.appspot.com",
    messagingSenderId: "285519778988",
    appId: "1:285519778988:web:3290cb45511dd9d72bbb09",
    measurementId: "G-5D4Q4EPYWS"
  };
  

function signUp(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    

  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(()=>{
      // Handle res here.
     
      window.alert(`You have signed up successfully`)
    })
    
    .catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  })
}
    

  
  
  
