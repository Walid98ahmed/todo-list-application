var firebaseConfig = {
    apiKey: "AIzaSyB57R12xoRzBqAao8Jk0P9Mr5xTOoaIW4s",
    authDomain: "task-user-athentication.firebaseapp.com",
    projectId: "task-user-athentication",
    storageBucket: "task-user-athentication.appspot.com",
    messagingSenderId: "285519778988",
    appId: "1:285519778988:web:3290cb45511dd9d72bbb09",
    measurementId: "G-5D4Q4EPYWS"
  };


function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    

  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then((user)=>{
      // Handle res here.
      
  
        window.alert(`You have loged in successfully`)
        window.location.href = `../css-and-js.html`;
      

    })
    
    .catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('erre', error)
      window.alert("Error : " + errorMessage);
  })
}
   

