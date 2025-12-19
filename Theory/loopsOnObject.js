const myObj = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
    key4:'value4',
    key5:'value5',
};
// we can iterate objects by using for in loop

for (const key in myObj) {
    // console.log(key);

    // to print both key and value pair
    // console.log(`${key} has ${myObj[key]}`)
};

// using for in loop in an array

const nums = [1,2,3,4,5,6,7,8];
for (const key in nums) {
    // console.log(key); will print the index values of the array
    // to print the array itself we must use something like below

    // console.log(nums[key]);
};

// other way to do is 

nums.forEach((val,index,array)=>{
    // console.log(val);
    // console.log(index);
    // console.log(array);
});
// will print the value inside the array
// note forEach will not return any value it will always return undefined

const myNums = [1,2,3,4,5,6,7,8,9,10];
// we want a array which has some condition / mathematical operation applied to myNums
// we will use filter method
const ansNums = myNums.filter((item)=>{
    return item%2==0;
    // returns all values satisfying above condition
});
console.log(ansNums);