const  tinderUser = new Object();
// will create a singleton object named tinder user
// console.log(tinderUser); prints empty object

tinderUser.id = "123Abcd";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const regularUser = {
    email:"someone@gmail.com",
    // nested objects can also be created 
    fname:{
        firstName:"Vineet",
        lastName:"Prajapati"
    }
};

// console.log(regularUser.fname);
//  the element fname itself is an object and it can also have other objects inside of it too

// just like we merged arrays we can also merge objects

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1 , obj2};
// console.log(obj3);
// will create in format like {object{object}};

// or we can use the rest operator

const obj4 = {...obj1 , ...obj2};
// is most recomended
console.log(obj4);
// will create in a format like {object 1 , object 2};

const t1 = {
    conflict:"Vineet1",
    age:18
}
const t2 = {
    conflict:"Vineet2",
    age:19
}
const t3 = {...t1, ...t2};
console.log(t3);


// other way to do is 


const target = {1:"a",2:"b"};
const source = {3:"c",4:"d"};

const mixture = Object.assign({},target,source);
// {} is optional parameter but is recomended to use it
console.log(mixture);




// trickey question

const appUser = [
    {
        id: 1,
        email:"a@gmail.com",
    },
    {
        id: 2,
        email:"b@gmail.com",
    },
    {
        id: 3,
        email:"c@gmail.com",
    },
    {
        id: 4,
        email:"d@gmail.com",
    },
    {
        id: 5,
        email:"e@gmail.com",
    },
]

// console.log(appUser[1].email);

const exampleObject = {
    id:'123abc',
    name:'nikhil',
    isLoggedIn: false,
    dob: "16-11-2020",
}
console.log(Object.keys(exampleObject));
//  output is given as array and then we can perform mathematical / logical operations on that
console.log(Object.values(exampleObject));
console.log(Object.entries(exampleObject));


// we want to check if there is a key inside of that object 

console.log(exampleObject.hasOwnProperty('isLoggedIn'));
// it has the value true


