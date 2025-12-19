function removeVovelIfElse(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "u"
    ) {
      str[i] = "";
    } else {
      str2 += str[i];
    }
  }
  console.log(str2);
}
removeVovelIfElse("Hello");

function removeVovelAscii(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (
      charcode == 65 ||
      charcode == 69 ||
      charcode == 73 ||
      charcode == 79 ||
      charcode == 85 ||
      charcode == 97 ||
      charcode == 101 ||
      charcode == 105 ||
      charcode == 111 ||
      charcode == 117
    ) {
      str[i] = "";
    } else {
      str2 += str[i];
    }
  }
  console.log(str2);
}
removeVovelAscii("Hello");

function removeVovelIncludes(str) {
  let check = "AEIOUaeiou";
  let str2 = "";
  for (var i = 0; i < str.length; i++) {
    if (check.includes(str[i])) {
      str2 += "";
    } else {
      str2 += str[i];
    }
  }
  console.log(str2);
}
removeVovelIncludes("Hello");

function removeVovelObj(str) {
  let object = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  let str2 = "";
  for (var i = 0; i < str.length; i++) {
    if (object[str[i]]) {
      str2 += "";
    } else {
      str2 += str[i];
    }
  }
  console.log(str2);
}

removeVovelObj("Hello");
