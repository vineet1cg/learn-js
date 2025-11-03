// compile time error

//syntax error
// console.log(1;

//runtime error
//reference error when running the code
// console.log(x);


// try catch block

// try{
// // the code which we expect to have an error
// console.log('try block starts here');
// console.log(x);
// console.log('secret:this wont be showing in the console');
// // if there is an error in the line 15 the code would not get executed 

// } catch(e){
//     //define karte he , error ke saath kya karna he ?
//     // retry logic ?
//     // fallback mechanism
//     // show error on page if needed
//     // logging
//     console.log('I Am Inside Catch Block');
//     console.log('your error is : ',e);
// }
// // finally block -> will run everytime no matter What
// finally{
//     console.log('finally block runs everytime!!');
// }


// coustom Error Time !!
// try{
//     //refr err
//     console.log(x);
// } catch(err){
//     throw new Error("Lemon Error He Bhai , Declare Karna Bhul Gya lol");
// }


// when using error codes
let errorCode = 404;
if(errorCode==404){

    throw new Error("Abey Galat Json Chali Gayi Be,Check Kar");
}