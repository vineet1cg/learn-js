// strings

//types of declarations
let firstName = "vineet";
let lastName = 'prajapati';
let message = `hello my name is `;
// console.log(`${message} ${firstName} ${lastName}`);
// the one with `` we can use as <pre> tag from html 
// for example
let example = `this
is 
how 
<pre>
works in the html`;
console.log(example);
// the other ways to declare and assign to a string
let otherWay = new String("another way to declare and use strings ");
console.log(otherWay);
//find out the difference between the first way and the second way we used here


//concatination of strings
let opt1 = 'English : ';
let opt2 = 'Hindi : ';
let ans = opt1 + opt2;
console.log(ans);

// things to remember from above 
// let ans = `opt1 + opt2` -> will only print opt1 + opt2 in the console
let s1 = `Mobile`;
let s2 = `charger`;
let finalAns = `${s1} and ${s2}`;
console.log(finalAns);
// to print variables with string we must use the above way 
// how to get length of any string ?
let string1 = 'Hello This Is An Example Of a String';
console.log(string1.length);
console.log(string1.toUpperCase());
console.log(string1.toLocaleLowerCase());
console.log(string1.toLocaleUpperCase());
console.log(string1.toLowerCase());
//substring method 
let string2 = 'vineet';
console.log(string2.substring(2)); // will print neet
console.log(string2.substring(2,4));
//ending index is exclusive
//means that the ending index wont be considered in the console log
let sentence = "Hello How Are You?";
let words = sentence.split(' '); //words is array 
 // will split the string on basis of the space and return an array
console.log(words);
console.log(words.join(' ')); // can also use comma or hyphen or anything we may like 
// how to print "" inside a string
console.log("This Is How To Print An \"IMPORTANT\" word in js");
