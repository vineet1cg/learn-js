const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    // .then(item => console.log(item.joke))
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`
        jokeContainer.classList.add('fade');
    });

};
btn.addEventListener('click',getJoke);