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
  switch (true) {
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
function leapYear(year) {
  if (year % 400 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
function inRange(number) {
  // to check if a number is in range between 10 to 50
  if (number >= 10 && number <= 50) {
    console.log(`${number} is in range`);
  } else {
    console.log(`${number} is not in the range`);
  }
}
function print1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
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
// iterative factoreal
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
// first n multiples of 7
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
};
function productOfDigits(n){
    n = Math.trunc(Number(n));
    n = Math.abs(n);
    let product = 1;
    while(n>0){
        product = product * (n%10)
        n = Math.trunc(n / 10);
    }
    return product
};

function reverseAnumber(n) {
  const sign = Math.sign(n) >= 0 ? 1 : -1;
  const digits = Math.abs(n).toString().split('').reverse().join('');
  ;
  return sign * Number(digits);
};
function checkIfPalindrome(n){
    const sign = Math.sign(n) >= 0? 1 : -1;
    const digits = Math.abs(n).toString().split('').reverse().join('');
    let rNum = sign * Number(digits);
    if(rNum === n){
        console.log(`${n} is a palindrome`);
    } else {
        console.log(`${n} is not a palindrome`);
    }
};
function checkIfPrime(n){
    let isPrime = false;
    for(let i = 2 ; i<n ; i++){
        if(n%i==0){
            console.log(`${n} is divisable by ${i} thus not prime `);
            return;
        } else {
            isPrime = true;
        }
    }
    if(isPrime || n == 2 ){
        console.log(`${n} is a prime number`);
    }
};





