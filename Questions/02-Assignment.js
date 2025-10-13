//print array 


var array = [1,2,3,4,5,6,7,8,9,10];
var n = array.length;
for(var i = 0 ; i<n ; i++){
    console.log(array[i]);
}
//print sum and avg


var sum = 0;
for(var j = 0 ; j<n ; j++){
    sum = sum + array[j];
}
console.log("The Sum Of Array Is",sum);
var avg = sum/n;
console.log("The Avv Of The Array Is ",avg);


//print largest Number and second largest number of an array
var max_array = array[0];
var max2_array = array[0];
for(var k = 0 ; k<n ; k++){
    if(max_array<array[k]){
        max_array = array[k];
    }
}
for(var l = 0 ; l<n ; l++){
    if(array[l]>max2_array && array[l]<max_array){
        max2_array = array[l];
    }
}
console.log("The Max Number Of",max_array);
console.log("The Second Largest Number Of Array Is",max2_array);

//print smallest number 
var min_array = array[0];
for(var m = 1 ; m<n ; m++){
    if(min_array>array[m]){
        min_array = array[m];
    }
}
console.log("The Min Number Is",min_array);



//print number of odd and even elements of an array
var even = 0;
var odd = 0;
for(var x = 0; x<n ; x++){
    if(array[x]%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("The Even Number In Arrays Are = ",even);
console.log("The Odd Number In Arrays Are = ",odd);

//display array in reverse order
var reverse_array = [];
for(var z = 0 ; z<n ; z++){
    reverse_array[z] = array[n-z-1]; 
}
console.log("The Reverse Of The Array Is ",reverse_array);

//display positive negative and zero in array
var countPositive = 0;
var countNegative = 0;
var countZero = 0;
for(var p = 0 ; p<n ; p++){
    if(array[p]>0){
        countPositive++;
    }
    else if(array[p]<0){
        countNegative++;
    }
    else{
        countZero++;
    }
}
console.log("The Number Of Positive In Array Is",countPositive);
console.log("The Number Of Negative In Array Is",countNegative);
console.log("The Number Of Zero In Array Is",countZero);


//find numbers greater than a value   

var limit = 4;
for(var q = 0 ; q<n ; q++){
    if(array[q]>limit){
        console.log(array[q]);
    }
}
