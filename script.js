

var menubar = document.getElementById("menubar");
var btn = document.getElementById("btn");

btn.onclick = checkClass;

console.log(menubar.classList)

function checkClass(){
    if(menubar.classList.contains("active")){
        menubar.classList.remove("active");
    }
    else{
        menubar.classList.add("active");
    }
}

console.log(menubar.classList)