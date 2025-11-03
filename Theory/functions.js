// what are functions ? -> they contain a specific commands to execute when we call them
// it is used to make our code modular 
// we need to create a function when using the same specific task done by our code many times
function example(){
for(let i = 0 ; i<=5 ; i++){
    console.log("Hello World");
}
};
// this is how we define the function but if we run the code now it wont work since we need to call the function to use it
example(); // this is how a function is called
// we can call that function anytime we want
// also we can call the multiple times by using loops ;)
// random quote : can i be your function so that you can call me anytime you want :>
// syntax 
// function functionName (parameters){ // code };


// simple sum function 
function add(x,y){
    return x+y; // will return the sum but wont print it
}
let ans = add(4,5); // 4 , 5 are arguements passed when calling the function
 // can store the ans in a variable or directly call funtion in console.log
console.log(ans);
console.log(add(7,7));

//ways to define functions


//1 using the keyword function as we used before
//2 using variable 
const multiplication = function(a,b){
    return a*b;
}
console.log(multiplication(2,20));

// above code we stored the function as a variable and we need to call that variable name to use the function


const getExp = (a,b)=>{
    let ans = a**b;
    console.log(ans);
};
getExp(2,10);

// above way is called the arrow function we can use it as above it works similarly as the other functions
// we can use this function when using event listners and want to execute the commands right as the event has happened
