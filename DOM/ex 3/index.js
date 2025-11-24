let btn = document.getElementById('toggle');
let change = document.getElementById('change');
let show = document.getElementById('show');


show.style.display = "none";
function showPara(){
    change.style.display = "block";
    show.style.display = "none";
    btn.style.display = "inline-block";
}
function hide(){
    change.style.display="none";
    btn.style.display = "none";
    show.style.display ="inline-block";
};
btn.addEventListener('click',hide);
show.addEventListener('click',showPara);