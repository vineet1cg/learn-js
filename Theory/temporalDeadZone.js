// variable scoping 
// 1 global scope
// 2 function scope
// 3 block scope

// var let const

var age = 18; //global scope -> could have used the other two and it would have worked the same
// not in function or in coding block

{
    console.log(age); // it will work bacause variable in global scope
}
function printAge(){
    console.log(age);
}
printAge();


// function scoping of var

function example(){
    var fname = "Earth";
    console.log("Hello World",fname);
}
example();
// console.log(fname);
//  will cause reference error saying not defined cause only accsisible inside that block

{
    var ht = 153; // it isnt block scoped so we can accsess it anywhere !
}
console.log(ht);

// however let and const are block scoped
{
    let value = 30;
}
// console.log(value); will causee reference error


//temporal dead zone
//when using let and const
// console.log(marks); cannot be hoisted -> will cause it to show reference error
// lines before that declarations is called the temporal dead zone

// let marks = 100;
// best practice is to use let and const while using variables



// notes
// Demonstrating variable scoping and hoisting in JavaScript

// 1. Global Scope
var age = 18; // global scope

{
    console.log(age); // 18, accessible due to global scope
}
function printAge() {
    console.log(age); // 18, accessible inside function
}
printAge();

// 2. Function Scope with var
function example() {
    var fname = "Earth"; // function scope
    console.log("Hello World", fname); // Hello World Earth
}
example();
// console.log(fname); // ReferenceError: fname is not defined (function scope only)

// 3. Block Scope with var (NO! var is not block scoped)
{
    var ht = 153; // var is NOT block scoped, accessible outside
}
console.log(ht); // 153

// 4. Block Scope with let and const
{
    let value = 30;
    const code = 42;
    console.log(value); // 30
    console.log(code);  // 42
}
// console.log(value); // ReferenceError: value is not defined
// console.log(code);  // ReferenceError: code is not defined

// 5. Temporal Dead Zone (TDZ) with let and const
// console.log(marks); // ReferenceError: Cannot access 'marks' before initialization
let marks = 100;

// Best Practice: Prefer let and const for safer, block-scoped variables to avoid bugs from hoisting and TDZ issues.
