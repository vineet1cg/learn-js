// let btn = document.getElementById('btn');
// let task = document.getElementById('text');
// let list = document.getElementById('list');

// // function addTask(){
// //     let addition = task.value;
// //     let appender = `<li> ${addition} </li>`;
// //     list.appendChild(appender);
// // };
// btn.addEventListener(btn,addTask);


// function addTask() {
//     let addition = task.value;
//     list.insertAdjacentHTML('beforeend', `<li>${addition}</li>`);
//     task.value = ''; // Clear input
// }
let btn = document.getElementById('btn');
let task = document.getElementById('input'); 
let list = document.getElementById('list');
let reset = document.getElementById('clear');

function addTask() {
    let addition = task.value;
    let li = document.createElement('li');
    li.textContent = addition; 
    list.appendChild(li); 
    task.value = ''; 
}

btn.addEventListener('click', addTask);
reset.addEventListener('click',()=>{
    list.innerHTML = '';
})
task.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        addTask();  
    }
});
