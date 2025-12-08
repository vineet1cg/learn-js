//44

// compare two strings

function compstr(s1, s2) {
  if (s1 === s2 && s1.length === s2.length) {
    console.log("Both Of The Datatypes And Values Are Same");
  } else {
    console.log("Both Are Not The Same");
  }
}
// compstr("Hello",'Hello');

// 45

// ascii from 48 to 57 is the range
function countNumberInString(str) {
  //   let count = 0;
  //   let ans = [];
  //   for (let i = 0; i < str.length; i++) {
  //     let ascii = str.charCodeAt(i);
  //     if (ascii >= 48 && ascii <= 57) {
  //       count++;
  //       ans.push(parseInt(String.fromCharCode(ascii)));
  //     }
  //   }
  //   console.log(`${str} has ${count} number of integers`);
  //   console.log(`And Their Array Is : ${ans}`);

  let nums = "1234567890";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (nums.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

// countNumberInString('2025 year');
// 46
function countUpperCase(str) {
  //   let count = 0;
  //   let ans = [];
  //   for (let i = 0; i < str.length; i++) {
  //     let ascii = str.charCodeAt(i);
  //     if (ascii >= 65 && ascii <= 90) {
  //       count++;
  //       ans.push(String.fromCharCode(ascii));
  //     }
  //   }
  //   console.log(`${str} has ${count} number of Uppercase`);
  //   console.log(`And Their Array Is : ${ans}`);
  let count = 0;
  let Uppercase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i++) {
    if (Uppercase.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(countUpperCase("HellLo"));

// 47 count lowercase

function countLowercase(str) {
  let count = 0;
  let Uppercase = "abcdefghijklmnopqursuvwxyz";
  for (let i = 0; i < str.length; i++) {
    if (Uppercase.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(countLowercase("HellLo"));

// 48 remove all vovels from a string

function removeVovels(str) {
  let count = 0;
  let ansStr = "";
  let vovels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
      count++;
    } else {
      ansStr += str[i];
    }
  }
  console.log(ansStr);
  console.log(count);
}
// removeVovels("AEIOU");

// 49 remove all digits
function removeDigits(str) {
  let ansStr = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      ansStr += String.fromCharCode(ascii);
    }
  }
  return ansStr;
}
// console.log(removeDigits("Hello123"));

// 50

function toggleCase(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii = ascii + 32;
    } else if (ascii >= 97 && ascii <= 122) {
      ascii = ascii - 32;
    }
    let char = String.fromCharCode(ascii);
    ans = ans + char;
  }
  console.log(ans);
}
// toggleCase("HeLLOeee");



// 51 print all elements of an array

// console.log([1,2,3,4,5]);


// 52 sum of array elements

function sumOfArray(arr){
  let sum = 0;
  arr.forEach(element => {
    sum+= element;
  });
  console.log(sum);
}
let arr = [1,2,3,4,5];
// sumOfArray(arr);

const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The '0' is the initialValue for the accumulator

console.log(sum); // Output: 15


// 53 max in array


function maxInArray(arr){
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log(undefined);
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}

// maxInArray([1,2,3,4,5,8])

// Q 48
// 1 > object 
// 2 > replaceAll
// 3 > if else 
// 4 > includes
// 5 > ascii

