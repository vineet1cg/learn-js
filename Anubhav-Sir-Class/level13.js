function middleLetter(str){
    let n = str.length - 1;
    return str[n/2];
}
function strStartsWithA(str){
    if(str[0]==='A' || str[0]==='a'){
        return true;
    } else {
        return false;
    }
}
function strEndsWithExclaim(str){
    if(str[str.length-1]==='!'){
        return true;
    } else {
        return false;
    }
}
function countSpaces(str){
    let count = 0;
    for(let i = 0 ; i<str.length ; i++){
        if(str[i]===' '){
            count++;
        }
    }
    return count;
}
function returnTrimmed(str){
    let ans = "";
    for(let i = 0 ; i<str.length ; i++){
        if(str[i]!==" "){
            ans+= str[i];
        }
    }
    return ans;
}
function replaceInStr(str){
    return str.replaceAll('?','!');
}
// console.log(replaceInStr("Hello??"));
function JoinStr(s1,s2){
    return s1.concat(" "+s2);
}
// console.log(JoinStr("hello","world"));
function FirstWord(str){
    let arr = str.split(' ');
    return arr[0];
}
function LastWord(str){
    let arr = str.split(' ');
    return arr[arr.length - 1];
}
function LongestWord(str){
    let arr = str.split(' ');
    let max = 0;
    arr.forEach((element)=>{
        if(element.length > max){
            max = element.length;
        }
    })
    return max;
}
// console.log(LongestWord("The Longest Word Inside This String Is Longest Itself"));
function ShortestWord(str){
    let arr = str.split(' ');
    let min = Infinity;
    let small;
    arr.forEach((elements)=>{
        if(elements.length<min){
            min = elements.length;
            small = elements;
        }
    });
    return small;
}
// console.log(ShortestWord("Java is fun"));
function CountTheInStr(str){
    let arr = str.split(' ');
    let count = 0;
    arr.forEach((element)=>{
        if(element==="the" || element==="The"){
            count++;
        }
    })
    return count;
}
// console.log(CountTheInStr("the cat and the dog"));

function ContainsVovel(str){
    for(let i = 0 ; i<str.length ; i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' || str[i]==='A' || str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i] ==='U'){
            return true;
        }
    }
    return false;
}
function StrContainsNum(str){
    let nums = "0123456789";
    let a = 0;
    for(let i = 0 ; i<str.length ; i++){
        if(!nums.includes(str[i])){
            a=1;
            break;
        }
    }
    if(a===0){
        return true;
    } else {
        return false;
    }
}
// console.log(StrContainsNum("123"));

function StrContainsLetters(str){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = 0;
        for(let i = 0 ; i<str.length ; i++){
        if(!letters.includes(str[i])){
            a=1;
            break;
        }
    }
    if(a===0){
        return true;
    } else {
        return false;
    }
}
// console.log(StrContainsLetters("Hello"));

function RepeatEachCharTwice(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i] + str[i];
    }
    return result;
}
function RemoveSpecialChars(str){
    // or can be done when checking we enter individual check like we did in the abcd
    let res = "";
    let spc = "!@#$%^&*()-_=+/|";
    for(let i= 0 ; i<str.length ; i++){
        if(!spc.includes(str[i])){
            res+=str[i];
        }
    }
    return res;
}
// console.log(RemoveSpecialChars("Hello@123!"));
function CountLGreaterThan(str){
    let arr = str.split(' ');
    let count = 0;
    arr.forEach((element)=>{
        if(element.length>=5){
            count++;
        }
    })
    return count;
}
// console.log(CountLGreaterThan("all big words here"));
function Anagram(s1,s2){
    
}
// 2 questions left here