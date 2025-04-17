document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loginedUser = users.find((user) => user.isLoggedIn === true);
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");
    let usernameBtn = document.querySelector(".username");