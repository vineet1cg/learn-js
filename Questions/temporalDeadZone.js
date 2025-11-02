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
let marks = 100;
// best practice is to use let and const while using variables
