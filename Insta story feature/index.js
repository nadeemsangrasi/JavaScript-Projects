let stories=[
    {dp:"./imgs/box-1.jpg",
    story:"./imgs/box-2.jpg"
},
{dp:"./imgs/box-3.jpg",story:"./imgs/box-4.jpg"
},
{dp:"./imgs/box-5.jpg",story:"./imgs/box-6.jpg"
},
{dp:"./imgs/box-7.jpg",story:"./imgs/box-2.jpg"
},
]

let addStories =(storys)=>{
    let clutter =""
for(let i=0;i<storys.length;i++){
clutter+=`<div class="story">
<img id="${i}" src="${storys[i].dp}" alt="img">

</div>`
}
let storiyan = document.querySelector(".storiyan") 
storiyan.innerHTML=clutter;
}
addStories(stories)

let showStories = (storys)=>{
    let story = document.querySelectorAll(".story") 
let fullScreen = document.getElementById("full-screen") 
story.forEach((elem,i)=>{
    function showImg(){
        fullScreen.style.display="block"
        fullScreen.innerHTML=`<img src="${storys[i].story}" alt="storyImg">`
        setTimeout(()=>{fullScreen.style.display="none"},3000)
    }
    elem.addEventListener("click",showImg);
})
}
showStories(stories)
