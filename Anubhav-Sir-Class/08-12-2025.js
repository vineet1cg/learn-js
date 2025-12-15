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

function logArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function logArray2(arr) {
  let arr2 = [...arr];
  console.log(arr2);
}
function logArray3(arr) {
  let otherArr = arr.join("");
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

function maxInArray1(arr) {
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
function maxInArray2(arr) {
  // using sort > decending sort
  arr.sort((a, b) => b - a);
  return arr[0];
}
function maxInArray3(arr) {
  let max = Math.max(...arr);
  return max;
}
// console.log(maxInArray3([1,2,3,4,5,6,7]));
// console.log(maxInArray2([1,2,3,4,5]));

// maxInArray1([1,2,3,4,5,8])

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
function minInArray2(arr) {
  let min = Math.min(...arr);
  return min;
}
function minInArray3(arr) {
  // soted in accending array sort
  arr.sort((a, b) => a - b);
  return arr[0];
}
// console.log(minInArray([-1,0,1,2,3,4]));

// 55 Count Even Numbers in an array
function counEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}
// other method to count odd numbers in an array
function counEven2(arr) {
  return arr.filter((n) => n % 2 == 0).length;
}
// console.log(counEven2([1,3,4,5,6,8,9,]));

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
function doubleArr1(arr){
  for(let i = 0 ; i<arr.length ; i++){
    arr[i] = arr[i]*2;
  };
  return arr;
}
function doubleArr(arr) {
  let double = arr.map((elements) => elements * 2);
  return double;
}
// console.log(doubleArr([1,2,3,4,5]));

// 62 square each element
function square1(arr){
  for(let i = 0 ; i<arr.length ; i++){
    arr[i] = arr[i] * arr[i];
  };
  return arr;
};
// console.log(square1([1,2,3,4]));
function square(arr) {
  let squared = arr.map((element) => element * element);
  return squared;
}
// console.log(square([1,2,3,4]));

// 63 reverse an array into new array
function arrRev1(arr){
  let revArr = new Array(...arr);
  return revArr.reverse();
};
// console.log(arrRev([1,2,3,4,5]));


function arrRev(arr) {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr[i] = arr[arr.length - i - 1];
  }
  return revArr;
};

// console.log(arrRev([1,2,3,4,5,6]));

// using two pointers
function arrRev1(arr){
  let i = 0;
  let j = arr.length-1;
  while(i<=j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
    i++;
    j--;
  };
  return arr;
}

// 64 copy an array
function copyArr(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
};
function copyArr2(arr){
  let copy = [...arr];
  return copy;
}
function copyArr3(arr){
  let copy = arr;
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

function arrayTarget2(arr, target) {
  return arr.includes(target);
}
function arrayTarget3(arr,target){
  let ans = arr.filter((elements)=> elements===target);
  if(ans){
    return true;
  }else {
    return false;
  }
}
// console.log(arrayTarget3([1,2,3],3));


// 66
function returnIndex(arr, target) {
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
function returnIndexOf(arr,target){
  return arr.indexOf(target);
};
// console.log(returnIndexOf([1,2,3],1));

// 67
function returnFreq(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
};
function returnFreq2(arr,target){
  let obj = {};
  for(let i = 0 ; i<arr.length ; i++){
    if(obj[arr[i]]){
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  if(obj[target]){
    return obj[target];
  } else {
    return -1;
  }
};

// console.log(returnFreq2([1,2,3,3],3));

// ->> For String Checking !
function charFreqInStr(str){
  let obj ={};
  for(let i  = 0 ; i<str.length ; i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }else {
      obj[str[i]] = 1;
    }
  }
  for (const key in obj){
    console.log(key,obj[key]);
  }
};
// charFreqInStr("Hello");


// 68 check if sorted

function checkSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkSorted([1,1,1,4,5,6]));

// 69

function secondLargest(arr) {
  let l1 = arr[0];
  let l2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (l1 < arr[i]) {
      l2 = l1;
      l1 = arr[i];
    } else if (arr[i] > l2 && arr[i] < l1) {
      l2 = arr[i];
    }
  }
  return l2;
}
function secondLargest2(arr){
  let max = 0;
  let smax = 0;
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]>smax && arr[i]<max){
      smax = arr[i];
    }
  }
  return smax;
};
function secondLargest3(arr){
  let sorted = arr.sort((a,b) => b-a);
  return sorted[1];
};

// console.log(secondLargest3([10,20,5,7,8]));

// 70 Second Smallest Element
function secondSmallest(arr){
  let ans = arr.sort((a,b)=> a-b);
  return ans[1];
};

// 71 Remove Even Numbers From Array

function remEven(arr) {
  let odd = arr.filter((number) => number % 2 !== 0);
  return odd;
}
function remEven2(arr){
  let res = [];
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]%2!==0){
      res.push(arr[i]);
    }
  }
  return res;
};
// console.log(remEven2([1,2,3,4,5]));

// we can also use for loop + push method

// 72 remove duplicates from both type of data -> integers and characters

// method - 1 > use set

function remDup(arr) {
  let res = [...new Set(arr)];
  console.log(res);
}
// remDup([1, 2, 2, 3, 3, 3]);

// method 2 > use nested loop

function remDup2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}
function remdup3(arr){
  let obj ={}
  for(let i = 0 ; i <arr.length ; i++){
    if(obj[arr[i]]){
      continue;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return Object.keys(obj);
}

console.log(remdup3([1,2,2,3,3,3]));

// 73 > Concatenate Two Arrays

function concArr(arr1, arr2) {
  let res = [...arr1, ...arr2];
  return res;
}
function concArr2(arr1,arr2){
  let res = arr1.concat(arr2);
  return res;
}
function concArr3(arr1,arr2){
  let res = [];
  for(let i = 0 ; i<arr1.length ; i++){
    res.push(arr1[i]);
  }
  for(let i = 0 ; i<arr1.length ; i++){
    res.push(arr2[i]);
  }
  return res;
}
// console.log(concArr([1,2,3],[4,5,6]));
// 74 intersection of two arrays
function intersection(arr1,arr2){
  let res = arr1.filter((elements)=>arr2.includes(elements));
  return res;
};
// console.log(intersection([1,2,3,4],[3,4,5]));
// function intersection2(arr1,arr2){
//   let res = [];
//   let i = 0;
//   let j = 0;
//   while(i<arr1.length && j<arr2.length){
//     if(arr1[i]==arr2[j]){
//       res.push(arr1[i]);
//       i++;
//       j++;
//     }else if(arr1[i] > arr2[j]){
//       i++;
//     } else {
//       j++;
//     }
//   }
//   return res;
// }

// 75 rotate array to right by 1

function rotateArr(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
// console.log(rotateArr([1,2,3,4]));

// 76 totate arraay to left by 1

function rotateArr2(arr) {
  let newArr = [...arr];
  let first = newArr.shift();
  newArr.push(first);
  return newArr;
}
// console.log(rotateArr2([1,2,3,4]));

// 77 count elements above avg

function numsAboveAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  let ans = arr.filter((nums) => nums > avg);
  return ans;
}
// console.log(numsAboveAvg([1,2,3,4,5]));

// 78 largest positive and smallest negative
// 1-> sort and return first and last indext

function largestSmallest(arr){
  arr.sort((a,b)=>b-a);
  return `${arr[0]} is largest and ${arr[arr.length-1]} is smallest`
};
// console.log(largestSmallest([-6,-87 , 4 , 34 , 12 , 56]));
// 79
function countBinary(arr){
  let c_1 = 0;
  let c_0 = 0;
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]==1){
      c_1++;
    }else if(arr[i]==0){
      c_0++;
    }else {
      return -1
    }
  }
  return `zeros = ${c_0} , ones = ${c_1}`;
}
// console.log(countBinary([0,1,0,0,0,1,0,1]));

// 80 separate even and odd arrays
function separate(arr){
  let odd = [];
  let even = [];
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]%2===0){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log('even',even);
  console.log('odd',odd);
}
// separate([1,2,3,4,5,6,7,8]);
