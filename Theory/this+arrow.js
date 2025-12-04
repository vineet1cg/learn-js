const user = {
  username: "vineet",
  price: 99,
  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    // keyword "this" is used to specify current context
  },
};
user.welcomeMessage();

user.username = "sam";
// context will change to sam =>
user.welcomeMessage();

// usage of this keyword in function

function hello() {
  let ans = 10;
  console.log(this.ans);
  // will return undefined bcz it does not work inside a fucntion (for now);
}
hello();

// same with expression (function type where declared as a const) , and arrow function

// arrow function syntax

const addTwo = (a,b) => (a+b);

console.log(addTwo(6,5));

const returnAnObject = ()=> ({username:"steve"});
console.log(returnAnObject());


// tricky questions

function parent(){
  let parentValue = "Hello";
  function children(){
    let childrenValue = "Hello From Inside";
    console.log(`${parentValue} can be accessed here`);
  }
  // but parent function cannot access the variables from child function
  // we may avoid using such declarations
  /*display flex -> flex items

fundamental difference between if else and ternary

how are inline elements taken care of inside an parent block element

height and width of inline elements

difference between statement and expression

shallow copy and deep copy in js

how to make shallow copy and deep copy

what are closures

// Question 1
console.log(a);
console.log(b);
var a = b = 5;

// Question 2
console.log(1<2<3);
console.log(1>2>3);

// Question 3
const func = ()=>{
 console.log(this.name)
};
func.call({name:'Jhon'});

change the function type from arrow to named or expression

arrow function takes this keword from its parent scope

how to make a key private from an object

backdrop filter changes property of position absolute/fixed for parent child 
  */
}