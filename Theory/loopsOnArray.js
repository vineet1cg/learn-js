const arr = [1, 2, 3, 4, 5];

// for of loop

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello!";

for (const greet of greetings) {
  // console.log(greet);
  // prints every char from the string
}

// maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States Of America");
map.set("FR", "France");
map.set("JP", "Japan");
// console.log(map);
// there are no duplicates inside a map ds

for (const key of map) {
  console.log(key);
  // prints it like an array like structure
}
for (const [key, value] of map) {
  console.log(key);
  // print only keys of the object like structure that map uses
  // we can similarly print only values of it by consoling value
}

// question is if we can use for of loop on an object?
const myObj = {
    'game1':'nfs-heat',
    'game2':'darkfest',
    'game3':'motogp23',
    'game4':'spiderman'
};
for (const [key,value] of myObj) {
    // console.log(key);
    // not iteratable like thiss
};
