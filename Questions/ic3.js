//sum of even and avg of odd with function

function myFunc(para){
var n = para.length;
var countOdd = 0;
var sumOfeven = 0;
var sumOfodd = 0;
for (var i = 0; i < n; i++) {
  if (para[i] % 2 == 0) {
    sumOfeven = sumOfeven + para[i];
  } else {
    sumOfodd = sumOfodd + para[i];
    countOdd++;
  }
}
console.log("The Sum Of Even Numbers Is : ", sumOfeven);
console.log("The Avg Of Odd Numers Is : ", sumOfodd/countOdd);
}
myFunc([1,2,3,4]);
myFunc([2, 34, 21, 45, 35, 92, 39]);







