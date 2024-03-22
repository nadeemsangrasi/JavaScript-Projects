var btn1 = document.querySelector('#btn1')
var head = document.querySelector("h1")


var isFriend = false
btn1.addEventListener('click',function() {
if (isFriend==false) {
    head.innerHTML="friends";
    head.style.color="green";
    btn1.innerHTML="remove"
    btn1.style.backgroundColor="red"
isFriend=true
}
else{
    head.innerHTML="stranger";
    head.style.color="red";
    btn1.innerHTML="Add friend"
    btn1.style.backgroundColor="aqua"
    isFriend=false

}
});
