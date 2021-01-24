// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADFb4D-i_Zh5bjUCS-CCLTrTI6vA0JJhY",
    authDomain: "kwitter-7fd45.firebaseapp.com",
    databaseURL: "https://kwitter-7fd45-default-rtdb.firebaseio.com",
    projectId: "kwitter-7fd45",
    storageBucket: "kwitter-7fd45.appspot.com",
    messagingSenderId: "557556687594",
    appId: "1:557556687594:web:53405453afc38ad266ed93"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();