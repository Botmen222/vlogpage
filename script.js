const menu =document.querySelector(".dots");
side_bar = document.querySelector("aside");
let menuState = false;
let x = window.matchMedia("(max-width: 700px)");
menu.addEventListener('click', showhideMenu);
function showhideMenu(){
    if(!menuState){
        menu.classList.add("active");
        side_bar.classList.add("active");
        menuState = true;
    }else{
        menu.classList.remove("active");
        side_bar.classList.remove("active");
        menuState = false;
    }
}
function myfunction(x) {
    if (x.matches) {
        menu.classList.add("active");
        side_bar.classList.add("active");
    } else {
        menu.classList.remove("active");
        side_bar.classList.remove("active");
    }
}   

function submit() {
    open("https://botmen.netlify.app");
}

myfunction(x);
x.addListener(myfunction);