function infoOfArray(arr){
    let c_p = 0;
    let c_n = 0;
    let c_z = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>0){
            c_p++;
        } else if (arr[i]===0){
            c_z++;
        } else {
            c_n++;
        }
    }
    console.log(`Positives = ${c_p} Negatives = ${c_n} Zeros = ${c_z}`);
}
function tripleEachElement(arr){
    return arr.map((element)=> element*3);
}
// console.log(tripleEachElement([1,2,3]));
function absoluteValueOfArr(arr){
    let ans = arr.map((element)=> Math.abs(element));
    return ans;
}
// console.log(absoluteValueOfArr([-1,-2,-3]));
function allElementsEven(arr){
    let a = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        if(!arr[i]%2===0){
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
function atLeastOneEven(arr){
    let oneEven = false;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2===0){
            oneEven = true;
        }
    }
    return oneEven;
}
// console.log(atLeastOneEven([1, 4, 5]));

function allPositive(arr){
    let allPositive = true;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<0){
            allPositive = false;
        }
    }
}