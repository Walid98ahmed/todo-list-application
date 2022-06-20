var firebaseConfig = {
    apiKey: "AIzaSyB57R12xoRzBqAao8Jk0P9Mr5xTOoaIW4s",
    authDomain: "task-user-athentication.firebaseapp.com",
    projectId: "task-user-athentication",
    storageBucket: "task-user-athentication.appspot.com",
    messagingSenderId: "285519778988",
    appId: "1:285519778988:web:3290cb45511dd9d72bbb09",
    measurementId: "G-5D4Q4EPYWS"
  };
  


function signOutUser(){

        firebase.auth().signOut()
            .then(() => {
                window.alert('User signed out successfully !');
            })
            .catch(error => {
                window.alert(error);
            });
        
    }

