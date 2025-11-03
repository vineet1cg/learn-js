function charFreq(name){
    let obj = {};
    for(let i = 0 ; i<name.length ; i++){
        if(obj[name[i]]){
            obj[name[i]]++;
        } else {
            obj[name[i]]=1;
        }
    }
    // console.log(obj);
    for(let char in obj){
        console.log(char,obj[char]);
    }
}
charFreq("Hello");
// explaination ->
// created an empty object
// with the if condition in 4th line we checked if there is char from the 0 index is present there
// here there is nothing in the object
// so it will go to the else condition and add a char with value 1
// for next time this same char appears the value increases by one
// it will traverse full string and in the end we log the full object to get output
// const name="madam";
// charFreq(name);
console.log([]==[]);

