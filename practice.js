//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAE6MXfu_GPYJu0j6DjyS4EWkCBkqx17PE",
    authDomain: "kwitter-e824b.firebaseapp.com",
    databaseURL: "https://kwitter-e824b-default-rtdb.firebaseio.com",
    projectId: "kwitter-e824b",
    storageBucket: "kwitter-e824b.appspot.com",
    messagingSenderId: "1014834531606",
    appId: "1:1014834531606:web:419669c36798203e941437",
    measurementId: "G-CD7C58Z8YE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

}