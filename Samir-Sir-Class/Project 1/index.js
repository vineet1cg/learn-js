let counter = 0;
let maxScore = 0;
const button = document.getElementById("click");
const reset = document.getElementById("reset");
const update = document.getElementById("update-score");
const prev = document.getElementById("prev");
const maxUpdate = document.getElementById("max");
button.addEventListener("click", () => {
  counter++;
  update.innerText = counter;
  localStorage.setItem("key", counter);
  // console.log(counter);
});



reset.addEventListener("click", () => {
  prev.innerText = localStorage.getItem("key");
  counter = 0;
  localStorage.setItem("key",counter);  
  update.innerText = counter;
  // console.log(counter);
});




// preffered way is to use innerText insted of innerHTML when changing the text
// node list and html content
// see DOM And How It Works
// How Does The JS Gets The Data From document
// make a notes for JS From The Begining And Double Down On Basics
// const obj = {
//     name:"hello",
//     age:18,
//     add:function(a,b){
//         console.log(a+b)
//     }
// };
// obj.add(5,4);

// setInterval
// let count = 0;
// function hello(){
//     count++;
//     if(count<=10){
//         console.log("hello")
//     } else{
//         clearInterval(id);
//     }
// }
// let id = setInterval(hello,2000);