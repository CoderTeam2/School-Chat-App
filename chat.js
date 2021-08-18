function login(){
    localStorage.setItem("User", document.getElementById("login_input").value);
    window.location = "chat_room.html";
}