sayMyName("Vineet");
function sayMyName(finalName){
    console.log(finalName);
}
// will work because the function will be pushed to the top
// it's called function hoisting
console.log(age);
// will display undefined because it only has shifted up the declaration of that variable
// called variable hoisting
var age = 18;
console.log(age);
// will work normally because we have assigned a value to it
// console.log(height);
// will give a reference error because hoisting only happens when using var keyword
// const will also have reference error
let height = 5.7;
console.log(height);


// function declaration me function hoisting nhi hoga
// sayHello();  will cause reference error
let sayHello = function(){
    console.log("Hello");
}
sayHello();


//what is call stack ?
// follows lifo
// from base to top
// the uppermost gets removed first 
// the lowermost gets removed the last

function fA(){
    console.log("A");
    fB();
}
function fB(){
    console.log("B");
    fC();
}
function fC(){
    console.log("C");
    fD()
}
function fD(){
    console.log("D");    
}
fA();


function greet(){
    console.log("Greetings For The Day");
}
function greetMe(greet,inputName){
    console.log("Hello ",inputName);
    greet();
}
greetMe(greet,"Vineet");

// how to use functions inside of the array

const arr = [
    function(a,b){
        return a + b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];
let first = arr[0];
let ans = first(5,10);
console.log(ans);

//function in objects

let obj = {
    age:18,
    wt:85,
    h:180,
    helloFunction: ()=>{
        console.log("Chocolate");
    }
}
obj.helloFunction();