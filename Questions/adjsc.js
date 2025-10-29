//to make the page dynamic we must use selectors in JavaScript
// console.log("Hello!");
// const hello = document.getElementById("h1");
// console.log(body);
// console.log(hello);
// console.log(hello.textContent);
// h1.textContent="Done Through JS DOM";
// console.log("partition");
// console.log(hello);

// const hello2 = document.getElementsByClassName("yo");
// console.log(hello2);
// let data = prompt()
let heading = document.getElementById("heading");
const button1 = document.getElementById("color");
const reset = document.getElementById("reset");
const body = document.getElementById("body");
button1.addEventListener("click",()=>{
    body.style.backgroundColor="red";
    heading.innerText=data;
});
reset.addEventListener("click",()=>{
    body.style.backgroundColor="white";
    heading.innerText=data;
});
// 
const button2 = document.getElementById("oc");
button2.addEventListener("click", () => {
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;
});


// we can also write external function and then call when the event is happened
// function button(){
//     body.style.backgroundColor="red";
//     heading.innerText=data;
// }
// button.addEventListener("click",button); we dont need to call the function over here 