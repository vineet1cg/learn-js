// day 1 of revicing javaScript

// print
console.log("Hello World");

// const keyword
const accountId = 14412;
let accountEmail = "example@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";


// const cannot be redefined 
// so 
// accountId = 2; will cause error because redefining isn't allowed in const
console.log(accountId);
accountEmail = "example2@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";
let accountState;
console.table([accountId , accountEmail , accountPassword , accountCity,accountState]);
// will show all variables in tabular format

/*
Prefer Not To Use Var Keyboard Because it Has Issues With scope
and we should always specify keyword before declaring it 
*/
