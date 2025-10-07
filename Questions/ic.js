var num = 1297;
var count = 0;
var last_digit = 0;
var reversed = 0;
while(num!=0){
    count = count*10+(num%10);
    //  last_digit = (num%10);
    num = Math.floor(num/10);
    // console.log(last_digit);
     
  
    
}
console.log(count);










// var i = 12;
// console.log(Math.floor(i/10));
// console.log(Math.ceil(i/10));