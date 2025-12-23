function MultilpleOf10(n){
    if(n%10===0){
        return true;
    } else {
        return false;
    }
}
function minOf(a,b){
    if(a>b){
        return b;
    } else {
        return a;
    }
}
function minOf3(a,b,c){
    if(a<b && a<c){
        return a;
    } else if(b<a && b<c){
        return b;
    } else {
        return c;
    }
}
function nTo1(n){
    let bag = '';
    for(let i = n ; i>=1 ; i--){
        bag+= `${i} `
    }
    console.log(bag);
}
function sumOfAllEven(n){
    let sum = 0;
    for(let i = 0 ; i<=n ; i++){
        if(i%2===0){
            sum+=i;
        }
    }
    return sum;
}
function divisBy2Or3(n){
    let count =0;
    for(let i = 0 ; i<=n ; i++){
        if(i%2===0 || i%3===0){
            count++;
        }
    }
    return count;
}

function divisBy2And5(n){
    let count =0;
    for(let i = 0 ; i<=n ; i++){
        if(i%2===0 && i%5===0){
            count++;
        }
    }
    return count;
}

function checkIfPerfect(n){
    let sum = 0;
    for(let i = 1 ; i<=n ; i++){
        if(n%i===0){
            sum+= i;
        }
    }
    if(sum===n){
        return true;
    } else {
        return false;
    }
}
function LargestInDigit(n){
    let res = [];
    while(n>0){
        res.push(n%10);
        n = Math.floor(n/10);
    }
    return Math.max(res);
}
// console.log(LargestInDigit(5823));

function LargestInDigit(n){
    n = Math.abs(Math.floor(n));
    if (n === 0) return 0;
    let max = 0;
    while (n > 0) {
        const d = n % 10;
        if (d > max) max = d;
        if (max === 9) return 9;
        n = Math.floor(n / 10);
    }
    return max;
}
function SmallestInDigit(n){
    n = Math.abs(Math.floor(n));
    if(n===0) return 0;
    let min = Infinity;
    while(n>0){
        const d = n % 10;
        if(min>d) min = d;
        if(min===0) return 0;
        n = Math.floor(n/10);
    }
    return min;
}
function countEvenDigits(n){
    n = Math.abs(Math.floor(n));
    if(n===0) return 0;
    let count = 0;
    while(n>0){
        const d = n%10;
        if(d%2===0) count++;
        n = Math.floor(n/10);
    }
    return count;
}
function countOddDigits(n){
    n = Math.abs(Math.floor(n));
    if(n===0) return 0;
    let count = 0;
    while(n>0){
        const d = n%10;
        if(d%2!==0) count++;
        n = Math.floor(n/10);
    }
    return count;
}
function absoluteDiff(a,b){
    Math.abs(a-b);
}
function ThreeDigitNum(n){
    if(String(n).length===3) return true;
    else return false;
}
function SumOfSquares1toN(n){
    let sum = 0;
    for(let i = 0 ; i<=n ; i++){
        sum += i*i;
    }
    return sum;
}
function SumOfCubes1ToN(n){
    let sum = 0;
    for(let i = 0 ; i<=n ; i++){
        sum+= i*i*i;
    }
    return sum;
}

function HarshadNumber(n){
    let sum = 0;
    let Onum = Math.abs(Math.floor(n));
    while(n>0){
        const digit = n%10;
        sum+=digit;
        n = Math.floor(n/10);
    }
    if(Onum%sum===0){
        return true;
    } else {
        return false;
    }
}

function isAutomorphicString(n) {
  const square = n * n;
  const numStr = String(n);
  const squareStr = String(square);


  return squareStr.endsWith(numStr);
}
function isAutomorphicByNumber(n){
    let length = String(n).length;
    let square = n * n;
    if(square%10**length==n){
        return true;
    } else {
        return false;
    }
}