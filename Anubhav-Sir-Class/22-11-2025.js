function evenOdd(n) {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is Odd`);
  }
}
function checkMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function checkMaxOf3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
function posNegZero(n) {
  if (n > 0) {
    console.log(`${n} is positive`);
  } else if (n == 0) {
    console.log(`${n} is equal to zero`);
  } else {
    console.log(`${n} is negative`);
  }
}
function ageCheck(age) {
  if (age > 0 && age < 12) {
    console.log(`${age} years old is child`);
  } else if (age > 12 && age <= 19) {
    console.log(`${age} years old is teenager`);
  } else if (age > 19 && age < 120) {
    console.log(`${age} years old is an adult`);
  } else {
    console.log(`${age} years old is invalid age`);
  }
}
function gradeCalculator(marks) {
  if (marks > 0 && marks < 59) {
    console.log("F");
  } else if (marks >= 60 && marks <= 69) {
    console.log("D");
  } else if (marks > 69 && marks <= 79) {
    console.log("C");
  } else if (marks > 79 && marks <= 89) {
    console.log("B");
  } else if (marks > 89 && marks <= 100) {
    console.log("A");
  } else {
    return -1;
  }
}

// using switch case

function gradeCalculator2(marks) {
  switch (marks) {
    case marks > 0 && marks < 59:
      console.log("F");
      break;
    case marks >= 60 && marks <= 69:
      console.log("D");
      break;
    case marks > 69 && marks <= 79:
      console.log("C");
      break;
    case marks > 79 && marks <= 89:
      console.log("B");
      break;
    case marks >= 89 && marks <= 100:
      console.log("A");
      break;
  }
}
function gradeCalculator3(marks) {
  marks = Math.floor(marks / 10);
  if (marks >= 0 && marks <= 100) {
    switch (marks) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        console.log("F");
        break;
      case 6:
        console.log("D");
        break;
      case 7:
        console.log("C");
        break;
      case 8:
        console.log("B");
        break;
      case 9:
      case 10:
        console.log("A");
        break;
    }
  }
}
function divisableBy5(n) {
  n % 5 == 0
    ? console.log(`${n} is divisable by 5`)
    : console.log(`${n} is not divisable by 5`);
}
function divisableBy3And5(n) {
  n % 5 == 0 && n % 3 == 0
    ? console.log(`${n} is divisable by both 3 and 5`)
    : console.log(`${n} is not divisable by both`);
}
function leapYear(year) {}

function inRange(number) {
  // to check if a number is in range between 10 to 50
  if (number >= 10 && number <= 50) {
    console.log(`${number} is in range`);
  } else {
    console.log(`${number} is not in the range`);
  }
}
//11
function print1To10() {
  // to print horizontally
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += i + " ";
  }
  console.log(output);
}
function print1ToN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
function printEven1ToN(n) {
  for (let i = 0; i <= n; i = i + 2) {
    if (i == 0) {
      continue;
    }
    console.log(i);
  }
}
function printOdd1ToN(n) {
  for (let i = 1; i <= n; i = i + 2) {
    console.log(i);
  }
}
function sum1ToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
function product1ToN(n) {
  let multiplication = 1;
  for (let i = 1; i <= n; i++) {
    multiplication = multiplication * i;
  }
  console.log(multiplication);
}
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
function divisableBy3in1ToN(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  console.log(`${count} numbers are divisable by 3 in the range of 1 to ${n}`);
}

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    let i = 1;
    while (i <= n) {
      result *= i;
      i++;
    }
    return result;
  }
}

function firstNmultipleOf7(n) {
  for (let i = 1; i <= n; i++) {
    console.log(7 * i);
  }
}

function countDigitsInNumber(n) {
  let digitCount = 0;
  if (n < 0) {
    n = Math.abs(n);
  }
  while (n != 0) {
    n = Math.floor(n / 10);
    digitCount++;
  }
  console.log(digitCount);
}

function sumOfDigits(n) {
  n = Math.trunc(Number(n));
  n = Math.abs(n);
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  return sum;
}
function productOfDigits(n) {
  n = Math.trunc(Number(n));
  n = Math.abs(n);
  let product = 1;
  while (n > 0) {
    product = product * (n % 10);
    n = Math.trunc(n / 10);
  }
  return product;
}

function reverseAnumber(n) {
  const sign = Math.sign(n) >= 0 ? 1 : -1;
  const digits = Math.abs(n).toString().split("").reverse().join("");
  return sign * Number(digits);
}
function checkIfPalindrome(n) {
  const sign = Math.sign(n) >= 0 ? 1 : -1;
  const digits = Math.abs(n).toString().split("").reverse().join("");
  let rNum = sign * Number(digits);
  if (rNum === n) {
    console.log(`${n} is a palindrome`);
  } else {
    console.log(`${n} is not a palindrome`);
  }
}
function checkIfPrime(n) {
  let isPrime = false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log(`${n} is divisable by ${i} thus not prime `);
      return;
    } else {
      isPrime = true;
    }
  }
  if (isPrime || n == 2) {
    console.log(`${n} is a prime number`);
  }
}
function returnPrime(n) {
  let isPrime = false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      isPrime = true;
    }
  }
  if (isPrime || n == 2) {
    return true;
  }
}
function allPrimes1ToN(n) {
  for (let i = 2; i < n; i++) {
    if (returnPrime(i)) {
      console.log(i);
    } else {
      continue;
    }
  }
}
function fibonacci1ToN(n) {
  if (n == 1) {
    console.log(0);
  } else if (n > 1) {
    let first = 0;
    let second = 1;
    let sum = 0;
    while (n != 0) {
      console.log(sum);
      first = second;
      second = sum;
      sum = first + second;
      n--;
    }
  }
}
function gcdOf2Nums(a, b) {
  let n = Math.max(a, b);
  let maxDiv = 1;
  for (let i = 1; i <= n; i++) {
    if (a % i == 0 && b % i == 0) {
      maxDiv = i;
    }
  }
  console.log(`${maxDiv} is the greatest common divisor`);
}
function lcmOf2Nums(a, b) {}
function lengthOfString(str) {
  if (typeof str == typeof "") {
    console.log(str.length);
  } else {
    console.log("Input Not A String!");
  }
}
function lengthOfStringUsingWhile(str) {
	if(typeof(str)==typeof("")){
  let count = 0;
  for (let values in str.split("")) {
    count++;
  }
  console.log(count);
	} else {
		console.log("Input Not An Array");
	}
};
// use while loop
function printCharFromStr(str){
	if(typeof(str)==typeof("")){
  let cArray = str.split("");
	let ans = ""
  for (let values in cArray) {
    ans = values + ""
  }
	} else {
		console.log("Input Not An Array");
	}
};




