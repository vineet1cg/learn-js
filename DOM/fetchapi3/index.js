var p = document.querySelector("p");
var btn = document.querySelector(".btn");
var card = document.querySelector(".card");
var inp = document.querySelector(".inp");

function createCard(data) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", data.strMealThumb);

  var p1 = document.createElement("p");
  p1.textContent = ` ID : ${data.idMeal}`;

  var p2 = document.createElement("p");
  p2.textContent = `MEAL : ${data.strMeal}`;

  var p3 = document.createElement("p");
  p3.textContent = `INSTRUCTIONS : ${data.strInstructions}`;

  var p4 = document.createElement("p");
  p4.textContent = ` CATEGORY : ${data.strCategory}`;

  var p5 = document.createElement("p");
  p5.textContent = `AREA : ${data.strArea}`;

  div.appendChild(img);

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p4);
  div.appendChild(p5);
  div.appendChild(p3);

  card.appendChild(div);
  console.log(card);
}
function loadData() {
  btn.disabled = true;
  btn.textContent = "Loading...";
  p.textContent = "MEALS";

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${inp.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        btn.disabled = true;
        btn.textContent = "Meals loaded";
        for (let i = 0; i < data.meals.length; i++) {
          createCard(data.meals[i]);
        }
      }
    })
    .catch((error) => {
      p.textContent = "Meals not found";
    });
}
btn.addEventListener("click", loadData);
