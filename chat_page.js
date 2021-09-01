
var firebaseConfig = {
    apiKey: "AIzaSyAmdkbZdLi6Sldf-FvwfJEQSX87ZeB9h2Y",
    authDomain: "school-chat-app-a68ef.firebaseapp.com",
    projectId: "school-chat-app-a68ef",
    storageBucket: "school-chat-app-a68ef.appspot.com",
    messagingSenderId: "620676891111",
    appId: "1:620676891111:web:7acfdda2a8e48d993c7d42"
  };
firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("User");
    window.location = "index.html";
}

var room_name = localStorage.getItem("Room Name");
var user_name = localStorage.getItem("User");

function send(){
    var msg = document.getElementById("message").value;
    firebase.database().ref(room_name).update({
        Name : user_name,
        Message : msg,
        Likes : 0
    });
    document.getElementById("message").value = "";
}