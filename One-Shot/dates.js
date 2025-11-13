// declare variables not war


// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// // moths start from 0 in js (indexed mothssss);
// let anotherDate = new Date("10-04-2008");
// console.log(anotherDate);
// console.log(anotherDate.getDate());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


// other methods

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday:"long",
    timeZone:''
    // etc ...
});




