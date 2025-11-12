// Stack And Heap
// Stack Is Used For Primative Data Types
// Heap Is Used For Non Primative Data Types
let myName = "Vineet";

// will be stored in the stack memory

let otherName = myName;

// the second one reffering to the same value will point at the same data in the heap memory 
// more like a copy of the first reference

let user = {
    email:"user@gmail.com",
    upi:"1234@hdfc"
}
let user2 = user; // will make a reference not create a new object 
// so any changes to the user2 will reflect in the main object too since it is a reference

user2.email = "updated@gmail.com"; // will be  reflected in the original object too
console.log(user.email);
console.log(user2.email);

