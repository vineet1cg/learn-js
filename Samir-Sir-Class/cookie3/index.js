var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
var btn4 = document.querySelector('.btn4')

btn1.addEventListener("change", () => {
    document.cookie = "username=lol; Path=/"
})
btn2.addEventListener("change", () => {
    document.cookie = "emailId=example1234@gmail.com; Path=/"
})
btn3.addEventListener("change", () => {
    console.log(document.cookie)
})

btn4.addEventListener("change", () => {
    document.cookie = "username=lol; expires=Thu, 18 Dec 2025 12:00:00 UTC; Path=/";
    document.cookie = "emailId=example@gmail.com; expires=Thu, 18 Dec 2025 12:00:00 UTC; Path=/";
})
