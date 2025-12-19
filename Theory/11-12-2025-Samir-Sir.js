// Today -> MAP , FILTER , REDUCE
const arr = [10, 20, 30, 40];

arr.forEach((data, index) => {
  // console.log(index + " " + data);
});

// is used for travelling
// min arguements -> one for accessing elements
// max arguements -> two for accessing elements and their index
// first one is always data and second one is always index

// multiply by 2 and put it in an new array

let arr2 = [10, 20, 30, 50];
let arr3 = arr2.map((elements) => elements * 2);
// will alwayse be needed to be stored in a new variable
// console.log(arr3);

// filter out even elements from the array

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8 , true];
let arr5 = arr4.filter((data) => data % 2 === 0);
// console.log(arr5);

// find sum of all elements in array

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"hello",true];
let arr7 = arr6.reduce((curr, next) => curr + next);
// console.log(arr7);

// main difference between map and filter is

// map always returns the same number of element in the resultant array
// filter always checks condition and only if true it returs it , So The Size May Vary
// console.log([]===[]); -> Always False BCZ JS Compares Objects By Reference !

{
  let arr2 = [
    { user: "mohit", age: 30 },
    { user: "saurabh", age: 27 },
    { user: "rishab", age: 18 },
  ];
  let arr1 = arr2.map((data) => data.user);
  // console.log(arr1);
}

// var check = 16;
// function yo(){
//     console.log(check);
//     // does have access to the check
//     var check2 = 32;
// };
// // yo();
// // console.log(check2); not accessible here :>

{
  let arr2 = [
    { user: "mohit", age: 30 },
    { user: "saurabh", age: 27 },
    { user: "rishab", age: 18 },
    { user: "jay", age: 11 },
  ];
  let arr1 = arr2.filter((data) => data.age > 18);
  // console.log(arr1);
}
// 1)both used in array and return array
// 2)map will have same size , filter's size will vary
// 3)map makes sure every index , filter makes sure every element with satisfied condition

// reduce makes sure when it returns a result it must be a sigular value of any datatype 
// can be used to count toal price of the cart array with price tag 


// for , while , do while , for each , for of , for in -> used to iterate in array
// To Iterate In Object We Must Use -> for in loop

const obj ={
  name:"Manan",
  age:18,
  mobileNum:999999999,
};

// to print everything we must iterate through whole object -<>-<>-
for(const key in obj){
  // console.log(`${key} and value is ${obj[key]}`);
};
// variable to iterate through key and then put that key into object in obj[key] to access the value
// note: for array -> index is unique and in object key is unique and forIn loop runs on that

// 1) return keys from an object
// let keys = []
// for(let key in obj){
//   keys.push(key);
// };
// console.log(keys);

// ->> Or We Can Do This
// It Is More Preffered >-<
let keysss = Object.keys(obj)

// for(let ket of keysss){
//   console.log(obj[ket]);
// }
