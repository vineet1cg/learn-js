// immidiately invoked function execution

(function immidiateExecution(){
    // named iife
    console.log("DB CONNECTED");
})();
// semi colon is mandatory here to end the line everytime we use iife
// it tells js that the function execution is completed
// fist is function definition and second is execution call
// to avoid pollution from global scope we must use these type of functions

// another example with arrow function

(()=>{
    console.log("DB CONNECTED TWO");
})();
// this way we can also make the arrow function execute withot any calling



// let check = (()=>{
//     console.log("hello world");
// })();

// check();
//  we will get an error saying that check is not an fucntion

let check2 = (a,b)=> (a+b);

console.log(check2(12,12));


// parameter and arguements in iife

// parameter here
((username)=>{
    console.log(` hello ${username}`);
})('vineet'); // arguement here 
