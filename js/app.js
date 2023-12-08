let signUp=document.getElementById("signUp");
let signId = document.getElementById("signIn");
let nameinput = document.getElementById("nameinput");
let titulo = document.getElementById("titulo");

signId.onclick=function() {
    nameinput.style.maxHeight="0";
    titulo.innerHTML="login";
    signUp.classList.add("disable");
    signId.classList.remove("disable")

}
signUp.onclick=function() {
    nameinput.style.maxHeight="60px";
    titulo.innerHTML="registro";
    signUp.classList.remove("disable");
    signId.classList.add("disable")

}