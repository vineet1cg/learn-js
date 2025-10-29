var x = 10; // without specifying any data types a bracket functuin is triggered to check for the datatype of the variable
// console.log(typeof(x));
// ans -> number
// array is stored in continues memory block 
// learn basics , how things are stored in computer
// functions
// function add(){
//     //code
// }
// add(); // calling the function

//arrow function
var add1 = ()=>{
//code
console.log("Hello");
return 0; // return the value after calling the funcion
}
// add1();
// console.log(add1);//add 1 holds a reference to the function
// console.log(add1());//calls the fuction and return when the value provided or print undefined

// var add2 = function(){
//     console.log("another function");
// }
// add2();
// console.log(add2);
// console.log(add2()); // will call the function


//you can also pass function as arguement and it would work still
// pass arguements -> directly value (funtion define -> datatype variable)
function add(x,y){
    console.log(x+y);
    return ()=>{
        console.log(x-y);
    };
};
// console.log(add(10,20));
var sub = add(10,20);
sub();
function hello(){
    var y = 10;
    console.log(x)
}
console.log(x);
for(var i = 0 ; i<x ; i++){
    console.log(i);
};
console.log(i);