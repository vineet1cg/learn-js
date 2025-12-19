console.log(addOne(6));
function addOne(num){
    return num+1;
};
// console.log(addTwo(6));
const addTwo = function (num){
    return num+2;
};
console.log(addThree(6));
var addThree = function(num){
    return num+3;
};
// var is only initiallized during hoisting
// so the actual function inside it is not in the global scope as the other
// functions
