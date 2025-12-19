var btn1 = document.querySelector('.btn');
var btn2 = document.querySelector('.btn1');
var btn3 = document.querySelector('.btn2');
var btn4 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {
document.cookie = "username=lol; Path=/";
});
btn2.addEventListener("click", () => {
document.cookie = "emailId=example1234@gmail.com; Path=/";
});
btn3.addEventListener("click", () => {
console.log(document.cookie);
console.log(typeof (document.cookie));
});

btn4.addEventListener("click", () => {
document.cookie = "username=lol; expires=Thu, 18 Dec 2025 12:00:00 UTC; Path=/";
document.cookie ="emailId=example1234@gmail.com; expires=rhu, 18 Dec 2024 12:00:00 UTC; Path=/";
});
