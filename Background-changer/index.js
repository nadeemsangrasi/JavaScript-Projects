let startBtn = document.getElementById('start')
let endBtn = document.getElementById('end')
let body = document.body
var btns =document.querySelectorAll("button")
btns.forEach((each)=>{
each.addEventListener("click",(e)=>{
    body.style.backgroundColor=e.target.textContent

})
})

function RandomColor(){
    let hex ="0123456789ABCDEF"
    let color ="#"
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let setIntervalId;
let startChange = function(){
    if(!setIntervalId){
        setIntervalId =setInterval(changeBg,1000)
        }
    function changeBg(){
        document.body.style.backgroundColor=RandomColor()
    }
    return setInterval
}
let endChange = function(){
    clearInterval(setIntervalId)
    setIntervalId=null
}


startBtn.addEventListener('click',startChange)
endBtn.addEventListener('click',endChange)
