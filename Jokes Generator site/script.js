let jokes = document.querySelector("#jokes");
let btn = document.querySelector("#btn")
let urls = 'https://icanhazdadjoke.com/'

// function fetchJokes(){
// let response = fetch(urls, {
// 	headers: {
//         Accept: "application/json"
//     }
// })
// let data = response.then((result) => {
//      return result.json()
// }).catch((err) => {
//     console.log(err)
// });
//  data.then((result) => {
//     jokes.innerHTML=result.joke
// }).catch((err) => {
//     console.log(err)
// });


// }
// btn.addEventListener('click',fetchJokes)
// same with await 
// farak kuch nai bs ak then lagane se bach jate ha
 async function fetchJokes(){
let response =  fetch(urls, {
	headers: {
        Accept: "application/json"
    }
})
let data = await response.then((result) => {
     return result.json()
}).catch((err) => {
    console.log(err)
});
jokes.innerHTML=data.joke
//  data.then((result) => {
//     jokes.innerHTML=result.joke
// }).catch((err) => {
//     console.log(err)
// });


}
btn.addEventListener('click',fetchJokes)