// to lowercase without in built methods

let str = "JavaScript";
let ans = "";
for(let i = 0 ; i<str.length ; i++){
    let ascii = str.charCodeAt(i);
    if(ascii>=65 && ascii <=90){
        ascii = ascii + 32;
    }
    let char  = String.fromCharCode(ascii);
    ans = ans + char;
};
console.log(ans);

// reverse a string

// with inbuilt method 

let string = "hello";
console.log(string.split('').reverse().join(''));

// using for loop

let revThis = "using_for_loop";
let reversed = ""
for(let i = revThis.length - 1 ; i>= 0 ; i--){
    reversed += revThis[i];
};
console.log(reversed);

// palindrome check on a string

// 1 using in built method -> we reverse the string and check with if condition

// 2 using for loop

function checkPalindromeStr(pal){
let isPalindrome = false;
for(let i = 0 ; i< pal.length ; i++){
    if(pal[i] === pal[pal.length - i - 1]){
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
}
if(isPalindrome){
    console.log("is a palindrome");
} else {
    console.log("is not a palindrome");
}
};
// checkPalindromeStr('hello');


function checkPalindrome2(string){
    let i = 0;
    let j = string.length - 1;
    while(i<=j){
        if(string[i]!=string[j]){
            return false;
        } else {
            return true;
        }
        i++;
        j--;
    }
};
console.log(checkPalindrome2('madam'));



function checkOccurance(string, char, ignoreCase = false) {
  if (ignoreCase) {
    string = string.toLowerCase();
    char = char.toLowerCase();
  }
  const count = Array.from(string).filter(c => c === char).length;
  console.log(`${char} occurs ${count} times in the string ${string}`);
}
checkOccurance('Hello','h', true);

function checkOccuranceUsingForLoop(string,char){
    let count = 0;
    for(let i = 0 ; i < string.length ; i++){
        if(char===string[i]){
            count++;
        }
    }
    console.log(count);
}
checkOccuranceUsingForLoop('hello','h');

// remove space using inbuilt methods

function inbuiltSpaceRemove(){
    // with using inbuilt methods
    // dont use trim bcz it cannot remove spaces in the middle 
    let str = '  hello ';
    let ans = str.split(' ').join('');
    console.log(ans);
};
inbuiltSpaceRemove();

function spaceRem(str){
    // without using in built method
    // we can also check by checking ascii value -> space has ascii value of 32
    let res = '';
    for(let i = 0 ; i<str.length ; i++){
        if(str[i] === ' '){
            continue;
        }
        res += str[i];
    }
    console.log(res);
};
// spaceRem('a b c ');

function countWords(str){
    // using in built methods
    let ans = str.split(' ');
    console.log(ans.length)
};
countWords('javascript is fun and doable');

