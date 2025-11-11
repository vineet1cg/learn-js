// type conversion lecture

let scoreFromDocument = "33";
let scoreIntegerFormat = Number(scoreFromDocument);
console.log(scoreIntegerFormat);
console.log(typeof(scoreIntegerFormat));

// will work flawlessly but it has some loop holes

scoreFromDocument = "33abc";
scoreIntegerFormat = Number(scoreFromDocument);
console.log(scoreIntegerFormat);
console.log(typeof(scoreIntegerFormat));
// will return NaN

// what would happen if scoreFromDocument is given the value null ?
scoreFromDocument = null;
scoreIntegerFormat = Number(scoreFromDocument);
console.log(scoreIntegerFormat);
console.log(typeof(scoreIntegerFormat));

// will return number 0 and data type as number

// for undefined 

scoreFromDocument = undefined;
scoreIntegerFormat = Number(scoreFromDocument);
console.log(scoreIntegerFormat);
console.log(typeof(scoreIntegerFormat));

// will return NaN which means not a number

// for booleans 
// if true than value -> 1 and for false -> 0
scoreFromDocument = true;
scoreIntegerFormat = Number(scoreFromDocument);
console.log(scoreIntegerFormat);
console.log(typeof(scoreIntegerFormat));


// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);



// empty string 
isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// will give us false 

// filled string
isLoggedIn = "Vineet";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// will give us true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// will convert 33 to => "33"


// ***** Operations *****

let value = 5;
let negValue = -value;
// will negative the value

// all normal mathematical operations work normally

console.log(2**3);

// will print power


let str1 = "hello";
let str2 = " world!";
console.log(str1 + str2);


// think about this

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(2+2+"1");
console.log(+true);
console.log(+"");


