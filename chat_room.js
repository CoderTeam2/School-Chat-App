var name = localStorage.getItem("User");
document.getElementById("greeting").innerHTML = "Welcome "+name+"!"
function logout(){
    localStorage.removeItem("User");
    window.location = "index.html";
}