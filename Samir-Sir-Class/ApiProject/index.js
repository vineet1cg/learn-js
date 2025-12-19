var p = document.querySelector("p");
var btn = document.querySelector(".btn");
var card = document.querySelector(".card");

function createCard(data) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", data.strCategoryThumb);

  var p1 = document.createElement("p");
  p1.textContent = `  ID : ${data.idCategory}`;

  var p2 = document.createElement("p");
  p2.textContent = `MEAL : ${data.strCategory}`;

  var p3 = document.createElement("p");
  p3.textContent = `DISCTRIPTION : ${data.strCategoryDescription}`;

  div.appendChild(img);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  card.appendChild(div);

  console.log(card);
}

function loadData() {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      //for(let i = 0; i<=13; i++){
      //    createCard(data.categories[i])}
      //}
      data.categories.slice(0, 5).forEach((element, index) => {
        createCard(data.categories[index]);
      });
    })
    .catch((error) => {
      p.textContent = "Error";
    });
}

btn.addEventListener("click", loadData);
