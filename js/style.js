const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
const navbutton = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
navbutton.addEventListener("click",myfuncion);
function myfuncion(){
links.classList.toggle("show-links");
}