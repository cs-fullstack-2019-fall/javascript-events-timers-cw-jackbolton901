var area = document.getElementById("text");
var button = document.getElementById("buts");

function able(ev){
    area.removeAttribute("disabled")
}
button.addEventListener("click", able);