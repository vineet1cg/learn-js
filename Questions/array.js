// --- Primitive Data Types ---
// These are predefined by JavaScript and usually have fixed memory sizes.
// Stored directly in the stack, which is fast and efficient.
// They hold simple values and are immutable.
let num = 42;                // Number: e.g., integers, floats
let str = "Hello";           // String: sequence of characters
let flag = true;             // Boolean: true or false
let nothing = null;          // Null: explicit 'no value' indicator
let undef;                   // Undefined: declared but not initialized variable
let sym = Symbol('id');      // Symbol: unique and immutable identifier
let bigInt = 9007199254740991n; // BigInt: integers beyond Number.MAX_SAFE_INTEGER

// Copying primitives copies the actual value, no references.
let a = 10;
let b = a;  // b copies value 10
b = 20;     // Changing b does not affect a

// --- Reference Types ---
// Objects, arrays, and functions are stored in the heap.
// Variables hold references to heap objects on the stack.
// Changes to one reference affect all references to the same object.

let obj = {
  fullName: "Vineet",
  age: 18,
  bloodGroup: 'B+',
  greet: function() {
    console.log("Hello World");
  }
};

// Calling function inside object
obj.greet(); // "Hello World"

// typeof operator returns "object" for objects and arrays
console.log(typeof obj); // "object"

// Shallow copy example:
// obj2 is a reference to the original object (not a copy of the object itself)
let obj2 = obj;

// Changing obj2 modifies obj as well since both refer to same memory location
obj2.age = 20;
console.log(obj.age); // 20

// Deep copy means recursively copying all nested properties to new object.

// --- Arrays ---
// Arrays are objects specialized in storing ordered collections.
// Their reference goes on the stack, data is stored in the heap.

let arr = [1, 2, 3, 4, 5, 6]; // arr is a reference to heap location with array data

// Array constructor example (not commonly used but valid)
let brr = new Array('Vineet', 18, true);
console.log(brr); // ['Vineet', 18, true]

// --- Array Methods ---

let crr = [2, 3, 4, 5];

// push(value): adds value to end, returns new length
let newLength = crr.push(6);
console.log(crr); // [2, 3, 4, 5, 6]
console.log(newLength); // 5

// pop(): removes last element, returns removed element
let popped = crr.pop();
console.log(popped);    // 6
console.log(crr);       // [2, 3, 4, 5]

// shift(): removes first element, returns it and shifts rest left
let shifted = crr.shift();
console.log(shifted);   // 2
console.log(crr);       // [3, 4, 5]

// unshift(value): adds value(s) to start, returns new length
let unshiftLen1 = crr.unshift(2);
console.log(crr);       // [2, 3, 4, 5]
console.log(unshiftLen1); // 4

let unshiftLen2 = crr.unshift(1);
console.log(crr);       // [1, 2, 3, 4, 5]
console.log(unshiftLen2); // 5

// slice(start, end): shallow copies from start index up to but excluding end index
// Negative indices count backward from the end (-1 last element)
let drr = [10, 20, 30, 40, 50];

console.log(drr.slice(2,4)); // [30, 40]
console.log(drr.slice(-2));  // [40, 50] last two elements
console.log(drr);            // Original array remains unchanged

// splice(start, deleteCount, ...items): mutates original array by deleting and/or inserting items

// Example: remove 2 elements at index 1, insert 'hello' in their place
let removedElements = drr.splice(1, 2, 'hello');
console.log(removedElements); // [20, 30]
console.log(drr);             // [10, "hello", 40, 50]

// If deleteCount is 0, no elements removed; new items inserted starting at index
drr.splice(2, 0, 'world'); // inserts 'world' at index 2 without removing
console.log(drr);          // [10, "hello", "world", 40, 50]

// --- map(callback) ---
// Returns a new array by applying callback to each item.
// Callback receives value, index, and original array as parameters
let err = [10, 20, 30];
let squaredArray = err.map((number, index) => {
  return number * number; // square of number
});
console.log(squaredArray);  // [100, 400, 900]

// map can also be used without returning anything for side effects
err.map((number, index) => {
  console.log('Value:', number, 'Index:', index);
});

// --- filter(callback) ---
// Returns new array of elements where callback returns true
let frr = [10, 15, 20, 25, 30];

// Filter even numbers
let evens = frr.filter(number => number % 2 === 0);
console.log(evens); // [10, 20, 30]

// Filter strings example
let grr = [1, 2, 'Vineet', true, null];
let strings = grr.filter(value => typeof value === 'string');
console.log(strings); // ['Vineet']

// --- reduce(callback, initialValue) ---
// Applies callback to accumulate a single value from array
// Callback has accumulator (acc) and current value (curr)
// initialValue sets acc initially

let irr = [10, 20, 30, 40, 50];
let sum = irr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 150

// --- sort(compareFunction) ---
// sorts array in place as strings lexicographically by default
let jrr = [9, 1, 7, 4, 2, 8];
jrr.sort();
console.log(jrr); // [1, 2, 4, 7, 8, 9]

// Numeric ascending sort using compare function
jrr.sort((a, b) => a - b);
console.log(jrr); // [1, 2, 4, 7, 8, 9]

// --- indexOf(value) ---
// Returns index of value if found, else -1
let hrr = [2, 3, 6, 7, 1, 6];
console.log(hrr.indexOf(1)); // 4

// --- find(callback) ---
// Returns the first element for which callback returns true
let foundNum = irr.find(num => num > 25);
console.log(foundNum); // 30

// --- forEach(callback) ---
// Executes callback on each element, returns undefined
let krr = [10, 20, 30];
krr.forEach((value, index) => {
  console.log("number:", value, "index:", index);
});

// --- Loops ---

// Classic for loop iteration by index
let lengthOfkrr = krr.length;
for (let i = 0; i < lengthOfkrr; i++) {
  console.log("Hello World!");
}

// for...in iterates over enumerable property keys (indices for arrays)
for (let index in krr) {
  console.log(index, krr[index]);
}

// for...in on object keys
for (let key in obj) {
  console.log(key, obj[key]);
}

// for...of iterates over iterable values (array values here)
for (let value of krr) {
  console.log(value);
}
