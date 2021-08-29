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

function regist(){
    Email.send({
        Host: "smtp.gmail.com",
        Username : "zomboribotond##@gmail.com",
        Password : "###########",
        To : 'zomboriboti####@gmail.com',
        From : "zomboribotond##@gmail.com",
        Subject : "Succes",
        Body : "Hellloooooooo",
    }).then(
        message => alert("mail sent successfully")
    );
    document.getElementById("code").type = "text"
    document.getElementById("name").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").onclick = sign_up
}

function sign_up() {
    console.log("hello")
}

myfunction(x);
x.addListener(myfunction);