
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDxJpGTLqNJa-UXVrvBFfcceCXVgSyLqNE",
      authDomain: "kwitter-945ca.firebaseapp.com",
      databaseURL: "https://kwitter-945ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-945ca",
      storageBucket: "kwitter-945ca.appspot.com",
      messagingSenderId: "230399701369",
      appId: "1:230399701369:web:d94c0c66f725c054bd3fa8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
