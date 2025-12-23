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
function countGreaterThanK(arr){
    let count = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>k){
            count++;
        }
    }
    return count;
}
function returnMinIndex(arr){
    let minIndex = Infinity;
    let minValue = Infinity;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<minValue){
            minValue = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
function containsDuplicate(arr){
    let a = 0;
    let obj = {};
    for(let i = 0 ; i<arr.length ; i++){
        if(obj[arr[i]]>1){
            a = 1;
        } else {
            obj[arr[i]]=1;
        }
    }
    if(a==0){
        return true;
    } else {
        return false;
    }
}
// console.log(containsDuplicate([1,2,3,1]));

function uniqueElements(arr){
    let arrNew = [];
    let obj = {};
    for(let i = 0 ; i<arr.length ; i++){
        if(obj[arr[i]]){
            continue;
        }else {
            obj[arr[i]] = 1;
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
// console.log(uniqueElements([1, 2, 2, 3, 3, 3]));

function strictlyIncreasingSarray(arr){
    
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>arr[i+1] || arr[i]==arr[i+1]){
            return false;
        }
    }
}
function moveAllNegativesToFront(arr){
    let res = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<0){
            res.unshift(arr[i]);
        } else if(arr[i]>0){
            res.push(arr[i]);
        }
    }
    return res;
}
// console.log(moveAllNegativesToFront([1, -2, 3, -4, 0]))

function maxMinDiff(arr){
    let min = Infinity;
    let max = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return max - min;
}

function elementAtEven(arr){
    let res = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(i%2===0){
            res.push(arr[i]);
        }
    }
    return res;
}
function elementAtOdd(arr){
        let res = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(i%2!==0){
            res.push(arr[i]);
        }
    }
    return res;
}
function countElementSLength(arr){
    let count = arr.forEach((element)=>{
        if(element.length>3){
            count++;
        }
    });
    return count;
}

function getFirstCharacters(strings) {
  
  return strings.map(str => str[0]);
}


const input1 = ["apple", "banana", "cherry"];
console.log(`Input: ${JSON.stringify(input1)} -> Output: ${JSON.stringify(getFirstCharacters(input1))}`);

function removeSpaces(arr){
    let res = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]!=="" && arr[i]!=" "){
            res.push(arr[i]);
        }
    }
    return res;
}
function SumOfEven(arr){
    let sum = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2===0){
            sum+=arr[i];
        }
    }
    return sum;
}
