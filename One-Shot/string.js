// non primative data type -> string
const name = "vineet";
const repoCount = 50;
console.log(name + repoCount + "value");
// outdated and not prefered 

// we will use back ticks for it

console.log(`Hello My Name Is ${name} and my repo count is ${repoCount}`);


// other way to create a string

// constructor

const gameName = new String('penninja');
//new is a constructor and the datatype is object for string
console.log(typeof(gameName));
// will have key value pairs 
console.log(` will print length of the string =  ${gameName.length}`);
console.log(` will print the string in uppercase =  ${gameName.toUpperCase()}`);
// and it will not change the original value inside of the string
console.log(` will print the character in index position =  ${gameName.charAt(2)}`);
console.log(` will print the index of character =  ${gameName.indexOf('i')}`);
// if there are more than one same character then it will give us the first index which is present at
const newString = gameName.substring(0,4);
console.log(newString);
// last value is ignored when using substring
const anotherString = gameName.slice(-8,4);
console.log(anotherString);
// can be given negative value
const newStringOne = "     spaces    ";
console.log(newStringOne);
console.log(newStringOne.trim());
// will print the string without the spaces
const url = "https://vineet.com/vineet%20prajapati";
console.log(url.replace('%20','-'));
// used to replace things (wont change anything in the original string);
console.log(url.includes('vineet'));
// will print boolean value
const example = "Hello My Name Is Vineet";
let obj = example.split(' ');
console.log(typeof(obj));
// will split it the string into array on the basis of the spaces

const test = "Hello";
console.log(typeof(test));
// will genrate a normal string and show dataType As string 