// DOM Elements 
var todoList = []
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button")
var todoInput = document.getElementById("todo-input")
var deleteAllButton = document.getElementById("delete-all")
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("deleteseleeted")

// functions and eventlisteners

function updateList(){
    comdoList = todoList.filter((data)=>{
        if(data.complete==true){
            return data;
        }
    });
    remList = todoList.filter((data)=>{
        if(data.complete == false){
            return data;
        }
    });
    document.querySelector('#c-count').textContent = comdoList.length;

}
function addTask(){
    var task = todoInput.value;
    // remember above property !
    if(task==""){
        alert("Iski Vajah Modi He !");
        return; 
    }
    // next we have to track of each task for completion
    todoList.push({
        content:task,
        id: Date.now().toString(),
        complete: false
    });
    // todoList.forEach((data)=>{
    //     console.log(data);
    // }); see in console when adding data 
    document.querySelector('#r-count').textContent = todoList.length;

    updateList(); // to update the list 
}

addButton.addEventListener('click',addTask);
todoInput.addEventListener('keypress',(event)=>{
    // console.log(event.key)
    if(event.key=='Enter'){
        addTask();  
    }
});

