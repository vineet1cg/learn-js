// synchronous code 
// flow of execution is line by line 
// explained in the tldr files 
// asynchronous code -> flow of execution is not line by line 
// asynchronous code include the example of the event listener 


// blocking => 
console.log("start");
function sayMyName(){
    console.log("vineet");
}
setTimeout(sayMyName,5000,2);
console.log("end");
