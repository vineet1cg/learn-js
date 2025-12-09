let obj ={
    0:1,
    1:1,
    2:1,
    3:1,
    4:1,
    5:1,
    6:1,
    7:1,
    8:1,
    9:1
};
let res ="";
let str ="Hello World 3000 times";

for(let i = 0 ; i < str.length ; i++){
    if(obj[str[i]]){

    } else {
        res+=str[i];
    }
}
console.log(res);