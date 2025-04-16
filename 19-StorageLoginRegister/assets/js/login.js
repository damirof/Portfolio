document.addEventListener("DOMContentLoaded", () => {
let users = JSON.parse(localStorage.getItem("users"));

let form = document.querySelector("form");

form.addEventListener("submit", login);
function login(e) {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let user = users.find((user) => user.username == username && user.password == password);

    if (user) {
        toast("Login Successfuly");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        toast("Invalid username or password");
        return;
    }
}
let toast = (text) => {
    Toastify({
        text: text,
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
    }).showToast();
};
});