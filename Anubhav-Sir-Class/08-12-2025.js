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

function logArray(arr){
  for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
  }
};
function logArray2(arr){
  let arr2 = [...arr];
  console.log(arr2);
};
function logArray3(arr){
  let otherArr = arr.join('');
  console.log(otherArr);
}
// logArray3([1,3,4,5,6]);

// 52 sum of array elements

function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
}
let arr = [1, 2, 3, 4, 5];
// sumOfArray(arr);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum); // Output: 15

// 53 max in array

function maxInArray(arr) {
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

// 54 minimum in array

function minInArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(minInArray([-1,0,1,2,3,4]));

// 55 Count Even Numbers in an array
function counEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(counEven([2,4,6]))
// 56
function countOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(countOdd([1,2,3]));
// 57
function printPositive(arr) {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    }
  }
  return pos;
}

// console.log(printPositive([1,0,-5,-6,5,6,8]));
// 58
function printNegative(arr) {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      pos.push(arr[i]);
    }
  }
  return pos;
}
// console.log(printNegative([0,-1,-6,5,6,3,8]));

// 59 print only numbers greater than 10

function printGreaterThan(arr, num) {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      pos.push(arr[i]);
    }
  }
  return pos;
}
// console.log(printGreaterThan([1,3,4,5,2,6],3));

// 60
function avgOfArr(arr) {
  let n = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum / n;
}
// console.log(avgOfArr([1,2,3,4,5]));

// 61 double each element

function doubleArr(arr) {
  let double = arr.map((elements) => elements * 2);
  return double;
}
// console.log(doubleArr([1,2,3,4,5]));

// 62 square each element

function square(arr) {
  let squared = arr.map((element) => element * element);
  return squared;
}
// console.log(square([1,2,3,4]));

// 63 reverse an array into new array

function arrRev(arr) {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr[i] = arr[arr.length - i - 1];
  }
  return revArr;
}
// console.log(arrRev([1,2,3,4,5,6]));

// 64 copy an array
function copyArr(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}
// console.log(copyArr([1,2,3,4,6,8]));

// 65 check if array contains target value
function arrayTarget(arr, target) {
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
// 66
function returnIndex(arr, target) {
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// 67
function returnFreq(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

// 68 check if sorted

function checkSorted(arr) {
  var n = arr.length;
  var a = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      a = 1;
      break;
    }
  }
  if (a == 0) {
    console.log("Array Is Sorted");
  } else {
    console.log("Array Is Not Sorted");
  }
}
// checkSorted([1,2,3,4,5,6]);
// 69
function secondLargest(arr){
  let l1 = arr[0];
  let l2 = arr[0];
  for(let i = 0 ; i< arr.length ; i++){
    if(l1<arr[i]){
      l2 = l1;
      l1 = arr[i]
    } else if(arr[i]>l2 && arr[i]<l1){
      l2 = arr[i];
    }
  }
  return l2;
}
// console.log(secondLargest([10,20,5,7,8]));
// 70



