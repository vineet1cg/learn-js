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
