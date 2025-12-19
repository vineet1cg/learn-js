let paragraph = document.getElementById('rang');
let btn = document.getElementById('btn');
function colorbadal(){
    paragraph.style.color = "white";
    paragraph.style.backgroundColor = "blue";
    paragraph.innerText = "Rang Badal Diya Mene";
};
btn.addEventListener('click',colorbadal);