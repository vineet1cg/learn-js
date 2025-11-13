// array fully covered

const arr = [0,1,2,3,4,5];
// elements can be of different type too

// it is a collection of data
// it is resizeable 
// it may contain another array inside it
// arrays are not associative
// indexing starts from 0
// makes shallow copy 
// share the same reference 
// copy is changed -> main is also changed

const anime = ["AOT","Beserk","Initial D","Naruto","One Piece"];

const numbers = new Array(1,2,3,4,5,6);
console.log(typeof(numbers));


// array methods 

const newArray = [1,2,3,4,5,6];
newArray.push(3);
// will push 3 to the last index of the array
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.unshift(5);
console.log(newArray);
// puts the value in front of first index of the array
// shift will pop the value inserted by the unshift or on the 0 index of the array
newArray.shift();
console.log(newArray);

//Questionare methods
console.log(newArray.includes(2));
console.log(newArray.indexOf(3));


const newArr1 = newArray.join();

console.log(typeof(newArr1));
console.log(typeof(newArray));


