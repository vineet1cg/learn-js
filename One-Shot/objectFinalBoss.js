const course = {
    courseName:"JS",
    price:1000,
    instructor:"Vineet",
    isStudying:true
}

// other syntax to get and print values from an object is 

const{instructor:chotu} = course;
console.log(instructor);
//  ***** OR 
console.log(chotu);
//  ***** Will Both Work The Same 

// here chotu is alias to the original name instructor

// above ways are known as destructuring 

// Concept Of API => it is like waiter in hotel 
// JSON = javaScript Object Notation

