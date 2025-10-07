
let unitsConsumed = 350;

let totalBill = 0;

if (unitsConsumed <= 100) {
    totalBill = unitsConsumed * 5;
} else if (unitsConsumed <= 300) {
    totalBill = (100 * 5) + ((unitsConsumed - 100) * 7); 
} else {
    totalBill = (100 * 5) + (200 * 7) + ((unitsConsumed - 300) * 10);
}

console.log(`Electricity bill for ${unitsConsumed} units is ₹${totalBill}`);