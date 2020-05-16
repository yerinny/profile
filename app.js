// Use to grab onto Firebase -> Connection
var firebaseConfig = {
    apiKey: "AIzaSyDJ7qeGEN3xA5BfoNYUtjb9hJtfl71SlR0",
    authDomain: "contactme-2ab06.firebaseapp.com",
    databaseURL: "https://contactme-2ab06.firebaseio.com",
    projectId: "contactme-2ab06",
    storageBucket: "contactme-2ab06.appspot.com",
    messagingSenderId: "532116652685",
    appId: "1:532116652685:web:52585881bdf9b53c92d8c4"
  };

  //Init Firebase

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  //start grabbing our DOM Element
  const submitBtn = document.getElementById("submit");

  let userName = document.getElementById("userFullName");
  let userEmail = document.getElementById("userEmail");
  let userMessage = document.getElementById("userMessage");


  const db = firestore.collection("contactData");

  submitBtn.addEventListener('click', function(){
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;
      let userMessageInput = userMessage.value;

      //Access the Database Collection
      db.doc().set({
          name: userNameInput,
          email: userEmailInput,
          message: userMessageInput
      }).then(function(){
          console.log("Data Saved");
      }).catch(function(error){
          console.log(error);
      })
  });