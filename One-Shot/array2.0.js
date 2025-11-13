// // slice and splice method 
// const arr = [1,2,3,4,5,6,7];
// const myn1 = arr.slice(1,3);
// // does not include last index
// // returns a part of the original array 
// console.log(myn1);
// // original array will be as it is
// console.log(arr);

// const myn2 = arr.splice(1,3);
// // includes last index
// console.log(myn2);
// // returns original array-- 
// console.log(arr);

const marvel_heros = ["Thor", "Iron man" , "Spiderman"];
const dc_heros = ["Superman","Flash","Batman"];

// marvel_heros.push(dc_heros);
// both arrays wont merge together 
// it will push the inside array into the marvel_heros and it's last value will be a whole array
// 3rd element over here is the array for dc_heros which is already inside an array
// the other way to do it is below this line

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);


// note : push will reflect on the original array however concat will create a new array

const all_heros = [...marvel_heros , ...dc_heros];
// console.log(all_heros);
// speread the arrays into a bigger array 


// tricky question

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableArray = anotherArray.flat(Infinity);
// not recommended to use infinity 
console.log(usableArray);


console.log(Array.isArray("Hello?"));
console.log(Array.from("Hello?"));
console.log(Array.from({name:"vineet"})); // will log and empty array



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
