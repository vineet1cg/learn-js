function printSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printSquare(5);

function rightAngle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// rightAngle(4);

function rightAngleNum(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j} `;
    }
    console.log(row);
  }
}
// rightAngleNum(4);

function rightAngleNum2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${i} `;
    }
    console.log(row);
  }
}
// rightAngleNum2(4);

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
// multiplicationTable(4);

function multiplicationTable2(n) {
    let row = '';
  for (let i = 1; i <= 10; i++) {
    row += `${n*i} `;
  }
  console.log(row);
};
// multiplicationTable2(4);

function perfectSquare(n){
    if(n<0){
        return false;
    }
    return Number.isInteger(Math.sqrt(n));
};
// console.log(perfectSquare(16));
function perfectSquare2(n){
    if(n<0) return false;
    for(let i = 0 ; ; i++){
        const product = i*i;
        if(product==n) return true;
        else if(product>n) return false;
    }
};

function armStrong(n){
    let l_digit = 0;
    let temp = n;
    let count = 0;
    while(temp>0){
        temp = Math.floor(temp/10);
        count++;
    }
    temp = n;
    let sum = 0;
    while(temp>0){
        l_digit = temp%10;
        sum = sum + Math.pow(l_digit,count);
        temp = Math.floor(temp/10);
    }
    if(sum===n){
        return true;
    } else {
        return false;
    }
};
// console.log(armStrong(123));

function returnSize(arr){
    let ans =[];
    arr.forEach(word => {
        ans.push(word.length);
    });
    return ans;
}
function strCount(str){
  let count = 0;
  let i = 0;
  while(str[i]){
    count++;
    i++;
  }
  return count;
}
function returnSize2(arr){
  let n = strCount(arr);
  let res = [];
  for(let i = 0 ; i<n ; i++){
    res.push(strCount(arr[i]));
  }  
  return res;
}
// console.log(returnSize(["Apple","Banana","Cherry","Date"]));


// sum of each row in a 2D array
function sumOfRow(arr){
  let ans = [];
  for(let i = 0; i<arr.length ; i++){
    let sum = 0;
    for(let j = 0 ; j<arr[i].length;i++){
      sum = sum + arr[i][j]
    }
    ans.push(sum);
  }
  return ans;
}

// longest string in an array
function logestStrArr(arr){
  let max  = arr[0].length;
  let index = 0;
  for(let i = 0 ; i <arr.length ; i++){
    if(arr[i].length > max){
      index = i;
    }
  }
  return arr[index];
}
// console.log(logestStrArr(["hi","ab","abc"]));


// level 10

// Q91 Frequency of Numbers in Array

function freq(n){
  let obj ={};
  for(let i = 0 ; i<n.length ; i++){
    if(obj[n[i]]){
      obj[n[i]]++
    } else {
      obj[n[i]] = 1;
    }
  }
  return obj;
}
// console.log(freq([1,2,2,3]));

// Q92 Most Frequent Number In An Array


function mostFreq(n){
  if(n.length==1){
    return Number(n);
  }
  let obj = {};
  for(let i =0; i<n.length ; i++){
    if(obj[n[i]]){
      obj[n[i]]++;
    } else {
      obj[n[i]] = 1;
    }
  }
  let max = 0;
  let win = null;
  for(const [k,v] of Object.entries(obj)){
    if(v>max){
      max = v;
      win = k;
    }
  }
  return win;
}
// console.log(mostFreq([4,4,1,1,4]));

function charFreq(str){
  if(str===""){
    return {};
  }
  let obj = {};
  for(let i = 0 ; i<str.length ; i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
// console.log(charFreq("hello"));
// 94
function getStudentWithHighestMarks(students) {
  if (students.length === 0) {
    return null;
  }
  let highestMarksStudent = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestMarksStudent.marks) {
      highestMarksStudent = students[i];
    }
  }
  return highestMarksStudent.name;
}
// 95
function total(obj){
  let sum = 0;
  Object.values(obj).forEach(val=>{
    sum = sum+val;
  });
  return sum;
}
// console.log(total({apple: 50, banana: 20, mango: 30}));


function avgOf(obj){
  let sum = 0;
  let count =0;
  Object.values(obj).forEach(val=>{
    sum = sum+val;
    count++;
  });
  return sum/count;
}
// console.log(avgOf({apple: 50, banana: 20, mango: 30}));
