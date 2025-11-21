function functioName( a,b
    // parameters
){
    // logic
    return a+b;
}

// console.log(functioName(1,1)) // calling the function 


// types of function => (1) pure functions (2) impure functions
//                      (1) Normal Functions (2) Arrow Functions
// high order functions = map ,forEach , reducer
// immidiately envoked functions => IEEE


// important topics -> Hoisting ,{ let , const , var } <= proper definitions 

// token genration -> they are checked in private routes for login / other purposes as well


function findLargest(arr){
    let max = arr[0]; // assuming input is positive
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
function findLargest2(arr){
    let res = Math.max(...arr);
    return res;
}
// easy way to do it was to use the spread operator
arr = [2,4,6,9,5,8];
console.log(findLargest(arr));
console.log(findLargest2(arr));

//  or 

// count frequency

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
let name = ["a","b","c","b","a"];
charFreq(name);


//  3rd question remove duplicates from an array  

const arr2 = [1,2,3,4,1,2,4];
const uniqueset = new Set(arr2);
// set bhanayu nhi haji
const uniqueArray = [...uniqueset];
console.log(uniqueArray);


