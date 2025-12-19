let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

red.addEventListener('click',()=>{
    document.body.style.backgroundColor = "red";
});
green.addEventListener('click',()=>{
    document.body.style.backgroundColor = "green";
});
blue.addEventListener('click',()=>{
    document.body.style.backgroundColor = "blue";
});