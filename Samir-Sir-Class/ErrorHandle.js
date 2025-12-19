// mathematical error where division by zero is given as input by user

// so it is called arithmatic / mathematical erro

// Network Releted Problems -> connection , server issue , dns issue etc

// data base problem -> corrupt data , invalid data 

// array access -> accessing invalid index -> out of bounds error -> but it gives undefined

// will not give an error but return undefined as answer
let arr = [1,2,3,4,5];
console.log(arr[arr.length+1]);

// runtime error -> passing an invalid arguement through a function
// why should we use try & catch block > it does not affect the code after it and it lets it run
// if we dont use it our other code stops executing
// it is useful to running an risky code
// try block will run the code once
// if ran successfully -> catch is not called
// else the catch is called

function divide(a,b){
    
    try{
        console.log(a/b);
    }catch(e){
        throw new Error ('Abey 0 Se Divide nhi hota he re!');
    }
    // code over here will execute normally
    // but if we have set of instructions to still perform it is preffered to use finally block
    // it will still run even if there is an error in the try block :)
};
// will give us (infinity) in the answerrr but wont throw an arror <- same as array out of bound (undefined)

// when using file Handling we can check if file exists ? run rest of code : create and append data
// we will use try catch and finally for it
