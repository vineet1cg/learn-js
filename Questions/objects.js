//object;
// key = value;
// keys are constant , however values change with data ;
// values will change or be added next time;
// console.log("Objectss");
var array = [2, 34, 21, 45, 35, 92, 39];
var obj = {
  id: 12,
  name: "Vineet",
  mobile: 9998831502,
  marks: array,
  bday: {
    day: 1,
    month: 1,
    year: 2000,
  },
};
// console.log(obj); will access full object
console.log(obj.name); //will acces a particular key of an object.
console.log(obj.marks); // will access the array declared outside the objects
console.log(obj.bday.day, "/", obj.bday.month, "/", obj.bday.year);

var obj3 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
console.log(obj2.address.geo.lat);
console.log(obj2.company.name);



