let update = document.getElementById('update');
let btn = document.getElementById('btn');
function show(){
    count++;
    update.innerText = count;
}
let count = 0;
btn.addEventListener('click',show);