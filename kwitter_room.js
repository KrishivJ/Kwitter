
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD-zPCf5lmY69ENWbW7uMHQOGyyd1aZrOE",
      authDomain: "kwitter---web-app.firebaseapp.com",
      projectId: "kwitter---web-app",
      storageBucket: "kwitter---web-app.appspot.com",
      messagingSenderId: "697632731227",
      appId: "1:697632731227:web:406a52fae060b9d0774f7e",
      measurementId: "G-3QNYRH8EZP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      window.location = "index.html";
}

