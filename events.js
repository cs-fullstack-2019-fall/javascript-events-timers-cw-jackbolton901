var box = document.getElementById("no_click");
function toldYou(ev){
    box.setAttribute("disabled", "");
    alert("Dont click my box again");
}
box.addEventListener("click", toldYou);

//  !! : prevent default behaviour 