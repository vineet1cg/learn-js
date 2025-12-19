function returnSquare(n){
    return n*n;
}
// console.log(returnSquare(-9));

function sum(a,b){
    return a + b;
}

function greet(str){
    console.log(`Hello ${str}!`);
}

function even(n){
    if(n%2===0){
        return true;
    } else {
        return false;
    }
}
function odd(n){
    if(n%2!==0){
        return true;
    } else {
        return false;
    }
}
function range(n){
    if(n>=1 && n<=100){
        return true;
    } else {
        return false;
    }
}
function bigOf(a,b){
    if(a>b){
        return true;
    } else {
        return false;
    }
}
function strlenGreaterThan(str){
    if(typeof(str) == String && str.length>5){
        return true;
    } else {
        return false;
    }
}
function returnFirstOfStr(str){
    if(typeof(str)==String){
        return str[0];
    } else {
        return false;
    }
}
function returnLastOfStr(str){
    if(typeof(str)==String){
        return str[str.length -1];
    } else {
        return false;
    }
}
function compareStr(s1,s2){
    if(typeof(s1)==String && typeof(s2)==String && s1.length > s2.length){
        return s1;
    } else if (s2.length > s1.length){
        return s2;
    } else {
        return false;
    }
}
function avgOf3(a,b,c){
    return (a+b+c)/3;
}
function sign(n){
    if(n>0){
        console.log("Positive");
    } else if(n===0){
        console.log("Zero");
    } else if(n<0){
        console.log("Negative");
    } else {
        return false;
    }
}
function eligibleToVote(n){
    if(n>18){
        return true;
    } else {
        return false;
    }
}
function hoursToMinute(n){
    return n*60;
}
function minutesToSeconds(n){
    return n*60;
}
function CtoF(n){
    return Math.floor((n*9)/5)+32;
}
function FtoC(n){
    return Math.floor((n-32)*(5/9));
}
function AreaOfTriAngle(base,height){
    return (.5)*(base)*(height);
}
function AreaOfCircle(r){
    return Math.PI * r * r;
}
