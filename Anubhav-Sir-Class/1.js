// single threaded
// 2 types 


// (1) DOM
// (2) Asynchronous

// code -> global scope
// function -> function scope
// inside that function -> if else is considered block scoped


// Three Ways to define variables 
// var -> function scope 
// let , const -> block scope -> undefined outside the block


// const cannot be reassigned
// const must be declared when initializing 
// function fun(){ var i = 10; } -> console.log(i) => not defined error


// e x a m p l e s
let i = 0;
if(i==0){
    let a = 10;
    const b = 20;
    // same error with const 
    var c = 15;

}
// console.log(a) will cause the not defined error
// same with const
console.log(c);

function hello(){
    var example = 120;
}
// console.log(example); error because var is function scoped

// not declared when hoisted
console.log(x); // will show undefined because of hoisting is done for var
var x = 10;

// these lines are temporal dead zone for variable named err
// not initialized when hoisted
console.log(err);
let err = "temporal deadzone";


// meaning of single threading => The Code Is Ran  From Top To Bottom
// js will run the other  code when there is some Asynchronous part in between the code 
// so if there is an variable declared using var and used in the part of code it will cause errors
// this is the reason we use let or const when defining variables

// functions are completely hoisted
// defination of hoisting => pushes variables and functions in the top of the scope



