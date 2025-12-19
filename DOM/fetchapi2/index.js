//fetch pokemon data with pic
const url = "https://pokeapi.co/api/v2/pokemon/";
// other url https://pokemon-service-ucql.onrender.com/api/v1/pokemon/search?name=
// check for compatibiity

const card = document.getElementById('card');
const btn = document.getElementById('btn');

let getPokeData = () =>{
    // added more diversity by multiplying 1024 -> it works
    // task:find out how many pokemons does pokeAPI Has
    let id = Math.floor(Math.random() * 1024) + 1;
    // console.log(id);
    // concates url string with id
    const finalUrl = url + id;

    // fetching final url data
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) =>{
        genrateCard(data)
    });
};
// now we make the genratecard from the data
let genrateCard = (data) =>{
    // get neccesary data from api and assign it
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    card.innerHTML = `
                <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src=${imgSrc} alt="">
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
                
            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefence}</h3>
                    <p>Defence</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>
    `;
    appendTypes(data.types);
}
let appendTypes = (types) =>{
    types.forEach(item => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
}
btn.addEventListener('click',getPokeData);
window.addEventListener('load',getPokeData);

