// JavaScript Hoisting and Call Stack Explained

// --- Hoisting in JavaScript ---

// Hoisting is a JavaScript mechanism where variable, function, and class declarations
// are conceptually moved ("hoisted") to the top of their containing scope during the compilation phase.
// This means you can use variables and functions before declaring them in the code.

// However, only the declarations are hoisted, not initializations (assignments).

// Example with 'var' (declarations hoisted, initialized as undefined):
console.log(x); // Outputs: undefined (not an error)
var x = 5;
console.log(x); // Outputs: 5

// Explanation:
// The JavaScript engine treats the above as:
var x;          // declaration hoisted to top
console.log(x); // undefined since x not initialized yet
x = 5;          // initialization remains in place
console.log(x); // 5 after initialization

// Example with 'let' and 'const' (hoisted but in Temporal Dead Zone)
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Explanation:
// Variables declared with let and const are hoisted to the top of their block scope,
// but are not initialized immediately. The period between the start of the scope
// and the declaration is called the Temporal Dead Zone (TDZ).
// Accessing them before declaration throws errors.

// Function Hoisting:
// Function declarations (not expressions) are fully hoisted, so you can call them before declaration.
sayHello(); // Outputs: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// Function expression hoisting behavior is like variables (only declaration is hoisted):
// sayHi();              // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};

// Explanation:
// The var sayHi is hoisted, but assigned undefined initially,
// so calling sayHi before assignment causes TypeError.

// --- JavaScript Call Stack ---

// The call stack is a data structure that keeps track of function calls.
// When a function is invoked, it is pushed onto the call stack.
// When the function returns, it is popped off the stack.

// Example:

function first() {
  console.log("Inside first()");
  second();          // call second
  console.log("Back in first()");
}

function second() {
  console.log("Inside second()");
  third();           // call third
  console.log("Back in second()");
}

function third() {
  console.log("Inside third()");
}

first();

// Call stack execution order:
// 1. first() pushed on stack
// 2. first() calls second(), second() pushed on stack above first()
// 3. second() calls third(), third() pushed on stack above second()
// 4. third() executes and returns, popped from stack
// 5. second() resumes, executes remaining code, returns, popped from stack
// 6. first() resumes, executes remaining code, returns, popped from stack

// Console output order:
// Inside first()
// Inside second()
// Inside third()
// Back in second()
// Back in first()

// The call stack enables JavaScript to manage function invocations and returns in a last-in, first-out (LIFO) manner.

// --- Why is understanding Hoisting and Call Stack important? ---

// Hoisting helps explain how variables and functions behave when used before declaration,
// which can prevent bugs related to undefined variables or unexpected errors.

// The call stack explains how synchronous function calls run in order
// and helps debug issues like infinite recursion causing stack overflow errors.

// --- Summary ---

// Hoisting:
// - var declarations hoisted with initial value undefined.
// - let/const declarations hoisted but in TDZ until initialization.
// - Function declarations fully hoisted (can be safely called before definition).
// - Function expressions behave like var variables (hoisted declaration only).

// Call Stack:
// - Stack data structure managing function calls.
// - Push function on stack when called, pop when returns.
// - Executes functions in LIFO order, maintaining control flow.

// This foundational knowledge clarifies many JavaScript runtime behaviors and helps write better, bug-free code.
