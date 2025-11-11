// usage of symbol datatype

const id = Symbol('123');
const anotherId = Symbol('123');
if(id==anotherId){
    console.log("Both Are The Same");
} else {
    console.log("Both Are not The Same!");
}