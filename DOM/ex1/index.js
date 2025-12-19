let btn = document.getElementById('Btn');
let change = document.getElementById('change');
let reset = document.getElementById('BtnR');
function changeColor(){
    change.style.color = "blue";
    change.style.fontSize = "large";
    change.innerText = "le change kar diya";
};
function clearColor(){
    change.style.color = "black";
    change.style.fontSize = "medium";
}
btn.addEventListener('click',changeColor);
reset.addEventListener('click',clearColor);