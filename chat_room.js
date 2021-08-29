var firebaseConfig = {
    apiKey: "AIzaSyAmdkbZdLi6Sldf-FvwfJEQSX87ZeB9h2Y",
    authDomain: "school-chat-app-a68ef.firebaseapp.com",
    projectId: "school-chat-app-a68ef",
    storageBucket: "school-chat-app-a68ef.appspot.com",
    messagingSenderId: "620676891111",
    appId: "1:620676891111:web:7acfdda2a8e48d993c7d42"
  };
firebase.initializeApp(firebaseConfig);
var name = localStorage.getItem("User");
document.getElementById("greeting").innerHTML = "Welcome "+name+"!"
function logout(){
    localStorage.removeItem("User");
    window.location = "index.html";
}

function addRoom(){
    var room_name = document.getElementById("room.name").value; 
    localStorage.setItem("Room Name", room_name);
    firebase.database().ref("/").child(room_name).set({
        Purpose : "Room Name"
    });
    window.location = "kwitter_page.html";
}
function getdata(){
    firebase.database().ref("/").on("value", function(snapshot){
        document.getElementById("rooms").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var row = "<div id="+childKey+" onclick='redirect(this.id)'#"+childKey+"</div><hr>";
            document.getElementById("rooms").innerHTML += row;
        })
    })
}
getData();

function redirect(id) {
    localStorage.setItem("RoomName", id);
    window.location = "kwitter_page.html";
}