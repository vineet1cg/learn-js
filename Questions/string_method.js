console.log("Hello :D");
// string methods

let s1 = "ABCDEFGHIJKLMNOPQ"
let l1 = s1.length;
console.log(l1);


//Extracting String


//printing string using for looop (not neccesary but you can directly print it by using console.log)
let s2 = "HOla :D";
for(let i = 0 ; i<s2.length ; i++){
    console.log(s2.charAt(i));
}
let c2 = s2.charAt(0);
console.log(c2);


//check if palindrome of string
//check at home!!

let p = "madam";
let n = p.length;
let p_rev = "";
for(let i = 0 ; i<n ; i++){
    p_rev = p_rev + p[i];
}
if(p_rev===p){
    console.log("its a palindrome!");
}

//print ascii code of a character
let text = "ABC";
let char = text.charCodeAt(0);
console.log(text.charCodeAt(2));
console.log(text.codePointAt(0));


//concat strings
let str1 = "Hello";
let str2 = "World";
let ans = str1.concat(" ",str2);
console.log(ans);

//Extracting string parts

//using slice / if given negative value it will start with 0
let str3 = "Noob";
let ans2 = str3.slice(0,2); //does not take the last value only takes 0 and 1 in this example!
console.log(ans2);
//see these both codes and fix it 
//using substring (can have negative values)
let str4 = "Apple";
let ans3 = str4.substring

// i will update above topic bekoz sir isnt teaching properly


//converting string 
let str5 = "helo \uD800";
let ans5 = str5.toUpperCase();
console.log(ans5);
let ans6 = str5.toWellFormed();

// to trim empty space
let str7 = "    helo_world";
let ans7 = str7.trim();
console.log(ans7);
