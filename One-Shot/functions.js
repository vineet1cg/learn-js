function sum(n1,n2){
    if(typeof(n1)==typeof(0) && typeof(n2)==typeof(0)){
        return (n1+n2);
    } else {
        throw new Error("Data Type Sahi Se Likh Lo");
    }
};
console.log(sum(5,3));
// console.log(sum(5,"3"));

