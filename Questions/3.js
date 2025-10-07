var inc = 250000;
var total_payable = 0;
if(inc<=250000){
total_payable = inc;
console.log(`No Tax Payable On Amount Of ${inc}`);
}
else if(inc>250000 && inc<=500000){
    total_payable = (inc*5)/100;
    console.log(`Tax Payable Is ${total_payable}`);
}
else if(inc>500000 && inc<=1000000){
    total_payable = (inc*20)/100;
    console.log(`Tax Payable Is ${total_payable}`);
    
}
else if(inc>1000000){
    total_payable = (inc*30)/100;
    console.log(`Tax Payable Is ${total_payable}`);
    
}
else{
    console.log("invalid range");
}