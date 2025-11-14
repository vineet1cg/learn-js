// objectsss 

// singleton => one of it's type => can be only created by the constructor 
// Object.create
// when we use the other way to declare the object it will not be a singleton
// trickey question to use symbol in the object as a key and give it a random value

const mySym = Symbol("key1");

const user = {
    name:"vineet",
    age:18,
    [mySym]:"mykey1",
    location:"Gandhinagar",
    email:"vineet@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// 1st way to access an object
console.log(user.email);
// 2nd way to access an object
console.log(user["email"]);

console.log(typeof(user[mySym]));
console.log(user[mySym]);



// we can overwrite the values by re assigining them as below

user.email = "vineet@chatgpt.com";
// Object.freeze(user);
user.email = "vineet@microsoft.com";
console.log(user);

user.greetings = function(){
    return "Hello User!";
}
console.log(user.greetings());

user.greetings2 = function(){
    return `Hello ${this.name}`;
    // will get value from the current object 
}
console.log(user.greetings2());