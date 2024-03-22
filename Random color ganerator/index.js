let h1 = document.querySelector("#color")
function color(){
    var RandomNum = Math.floor(Math.random()*16777215);
    var randomCode = "#" + RandomNum.toString(16);
    document.body.style.backgroundColor=randomCode;
    h1.innerHTML 
    h1.innerHTML=randomCode
}

var btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    color()
})