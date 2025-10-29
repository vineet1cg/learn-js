document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const usr = document.getElementById("username");
    const password = document.getElementById("password");
    const button = document.getElementById("submit");
    function clicked(e){
        e.preventDefault();
        console.log(usr.value);
        console.log(password.value);
    }
    if (form) form.addEventListener("submit", clicked);
});