var n1 = 6;
var n2 = 8;
var n3 = 4;
const array = [n1,n2,n3];
for(var i = 0 ; i<=2 ; i++){
    console.log(array[i]);
}
var max = array[0];
for(var j = 0 ; j<=2 ; j++){
    if(max<array[j]){
        max = array[j];
    }
}
console.log(max);