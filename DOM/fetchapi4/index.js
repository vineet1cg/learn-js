const input = document.getElementById("query");
console.log(input);
const btn = document.getElementById("btn");
const show = document.getElementById("output");
var index = 0;
function showData(data,index  = 0) {
  // count = count+1;
  let heading = document.createElement("h1");
  let code = document.createElement("h2");
  heading.innerText = `${data[index].schemeName}`;
  code.innerText = `${data[index].schemeCode}`;
  show.appendChild(heading);
  show.appendChild(code);
  index++;
}
function fetchD() {
  fetch(`https://api.mfapi.in/mf/search?q=${input.value}`)
    .then((response) => response.json())
    .then((data1) => showData(data1));
  
}

btn.addEventListener("click", fetchD());
