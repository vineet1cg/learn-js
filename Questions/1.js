var m1 = 85;
var m2 = 85;
var m3 = 85;
var m4 = 85;
var m5 = 85;
var avg = (m1 + m2 + m3 + m4 + m5)/5;
if(avg==90){
    console.log("A Grade");
}
else if(avg>=80 && avg<=89){
    console.log("B Grade");
}
else if(avg>=70 && avg<=79){
    console.log("C Grade");
}
else if(avg>=60 && avg<=69){
    console.log("D Grade");
}
else{
    console.log("Failed");
}