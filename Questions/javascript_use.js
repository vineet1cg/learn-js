// const heading = document.getElementById("heading");
// console.log(heading);
// console.log(document);
// const func =()=>{
//     setTimeout(()=>{
//         heading.textContent="Change Through DOM";
//     },8000);
// }
// func();
// const small = document.getElementsByClassName("small-heading");
// console.log(small);
// const hello = document.getElementsByTagName("h1");
// console.log(hello);
const heading1 = document.getElementById("h1");
const heading2 = document.getElementsByClassName("h2");
const heading3 = document.getElementsByTagName("h4");

heading1.style.backgroundColor="blue";
for(let i = 0 ; i<heading2.length ; i++){
    heading2[i].style.backgroundColor="red";
}
for(let j = 0 ; j<heading3.length ; j++){
    heading3[i].style.backgroundColor="yellow";
}

let heading = document.querySelectorAll("h1");
heading.style.fontsize = "50px";

