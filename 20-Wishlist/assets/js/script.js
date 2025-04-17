document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loginedUser = users.find((user) => user.isLoggedIn === true);
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");
    let usernameBtn = document.querySelector(".username");

    

    if (loginedUser) {
        login.classList.add("d-none");
        register.classList.add("d-none");
        logout.classList.remove("d-none");
        usernameBtn.textContent = loginedUser.username;
        
    } else {
        login.classList.remove("d-none");
        register.classList.remove("d-none");
        logout.classList.add("d-none");
    }
    
    let logoutUser = () => {
        if (loginedUser) {
            loginedUser.isLoggedIn = false;
            localStorage.setItem("users", JSON.stringify(users));
            window.location.reload();
        }
    };
    
    logout.addEventListener("click", logoutUser);
});
logoutUser();