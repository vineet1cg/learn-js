// const score = 400;
// console.log(typeof(score));

// const balance = new Number(100);
// console.log(balance);
// console.log(typeof(balance));

// console.log(balance.toString().length);
// // we can also concatinate this string and we can also do calculations
// console.log(typeof(balance));

// console.log(balance.toFixed(2));
// // presicion values upto 2 decimal Number

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));
// // will return a string always
// console.log(typeof(otherNumber.toPrecision()));
// // will return a string 

// const hundreds = 100000;
// console.log(hundreds.toLocaleString());
// // will go to us value
// console.log(hundreds.toLocaleString('en-In'));

// .MIN_VALUE  and > .MAX_VALUE (same as cpp);

// **************** Maths **************** 

console.log(Math);
// see in inspect ELEMENTS


const pi = Math.PI;
console.log(pi);

console.log(Math.abs(-54));
// works like mod function from jee

console.log(Math.round(4.5));
// rounds off like default

console.log(Math.ceil(4.2));
// celing value

console.log(Math.floor(4.9));
// floor value

console.log(Math.sqrt(25));
// square root

console.log(Math.max(2,3,1,5,8,9));
console.log(Math.min(1,2,3,4,5,5));

console.log(Math.floor(Math.random()*6));

// want to set our upper and lower limits for the Math.random
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));



