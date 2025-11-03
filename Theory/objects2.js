// how does object clonning works ?
const obj ={
  val:12
};
let b = obj;
//  will create a reference to the object but wont clone it

// so how to clone it ?
// 1 spread operator (...)
let cloneOfObj ={...obj};

obj.coustomValue = 23;
console.log(cloneOfObj);
//  only has copy before we added coustomValue
console.log(obj);
// has all the value 

// if we had declared the new object after adding the coustomValue it would also contain it


// 2 using assign

let clone2 = Object.assign({},obj);
console.log(clone2);
// it will have coustomValue since it was cloned after we added the value to the main obj


// how to get 2 object's property and make it contain in one object

const src1 = {
  age:18,
  wt:90,
  ht:153
}
const src2 = {
  fName:"Vineet",
  favSub:"javaScript"
}
let combinedObject = Object.assign({},src1,src2)
console.log(combinedObject);
// will have all the key:pairs value from both of the objects


// using iteration (basic method?!)

let filledObj = {
  key:'value',
  color:'blue',
  car:'renault',
  bankName:'sbi'
}
let emptyObj = {};


for(let key in filledObj){
  let newKey = key;
  let newValue = filledObj[key];
  // insert them in empty object
  emptyObj[newKey] = newValue;
}

console.log(emptyObj);

filledObj.type = '7 seater';
console.log(filledObj);
// will not be present in the clone object since it was declared and given after

