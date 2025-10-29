function checkPalindrome(str){
    let n = str.length;
    let temp = 0;
    for(let i = 0 ; i<n ; i++){
        if(str[i]!=str[n-i-1]){
            temp = 1;
        }
    }
    if(temp==0){
        console.log("Palindrome");
    } else {
        console.log("Not A Palindrome");
    }
}
// other way to do it and get a reverse
function reverse1(str){
    let rev = "";
    for(let i = str.length-1 ; i>=0 ; i--){
        rev+=str[i];
    }
    console.log(rev);
}
let str = "mam";
checkPalindrome(str);
reverse(str);