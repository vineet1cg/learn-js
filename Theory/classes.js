// classes 
class Human{
    //properties
    age = 18; //public
    #weight = 80; // i want to mark this private and can be accsessed by getter and setter
    ht = 153;
    speed; //we'll add walue by constructor
    constructor(newSpeed){
        this.speed = newSpeed;
    }
    //behaviour
    walking(){
        console.log("I am Walking",this.#weight); // gets accsess of current object's property!
    }
    running(){
        console.log("I am Running");
    }
    get fetchWeight(){
        return this.#weight;
    }
    set modifyWeight(val){
        this.#weight = val;
    }
}
let obj = new Human(40); // will pass the value to the constructor
//  created a new human lol
console.log(obj.age);
// console.log(obj.#weight); so it is a private so we can not use it
obj.walking();
console.log(obj.fetchWeight);
console.log(obj.speed); // we passed this arguement through constructor



//default parameters 
// allows to use function with a default value

function sayMyName(myName="Jeff"){
    console.log("My Name Is : ",myName);
}
sayMyName();
// when passing without arguements it will use default value

//what to do when one parameter is dependet on other parameter

function solve(value={age:18,wt:90,ht:153}){
    console.log("What's Up !",value);

}
solve();
// we can also add arrays or even a function in the default parameters

function getAge(){
    return 24;
}
function utility (name = "Samir",age = getAge()){
    console.log(`${name} sir is ${age} years old`);
};
utility();
