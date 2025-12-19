// JSON => javaScript Object Notation

    // key:value,
    // key2:value2

// definition => stored in text format (string) 
// communication between two devices
// data exchange between devides
// "" -> json loyal hota he

//syntax -> file_name.json
// stores both key and value in "" , we can ignore a single integer here 
// the data itself can be an array
// it wont be cosidered as object in json file

// now we want to use it as object in JS

// so the conversion gap is filled by ->> JSON.parse()

const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
const javascriptObject = JSON.parse(jsonString);

console.log(javascriptObject.name); // Output: Alice
console.log(javascriptObject.age);  // Output: 30



const invalidJsonString = '{"name": "Bob", "age": 25, "city": "London",}'; // Trailing comma makes it invalid

try {
  const obj = JSON.parse(invalidJsonString);
  console.log(obj);
} catch (e) {
//   console.error("Invalid JSON:", e); 
  // Output: Invalid JSON: SyntaxError: Unexpected token '}' in JSON at position 40
}

// to revert we can use JSON.stringify(objName);


var x = `{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"   
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }`

var y = JSON.parse(x);
console.log(y);
console.log(y.name);
console.log(y.address.street);


