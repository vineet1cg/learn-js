var btn = document.querySelector(".btn");
var container = document.querySelector(".dataContain");

function loadData() {
  fetch(
    "https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY&rapidapi-key=b3b4e21de6msh6d65d78b99ba32ap199128jsn77a17fe55e78"
  )
  .then((response) => response.json()).then((data1) => {
    console.log(data1.data.news.edges);
    for (var i = 0; i < 25; i++) {
      var para = document.createElement("p");
      para.textContent = data1.data.news.edges[i].node.text.plainText;
      para.style.color = "red";

      var anchor = document.createElement("a");
      anchor.setAttribute(
        "href",
        data1.data.news.edges[i].nxode.source.homepage.url
      );
      anchor.textContent = "Click the Link";

      container.appendChild(para);
      container.appendChild(anchor);
    }
  });
}

btn.addEventListener("click", loadData);
