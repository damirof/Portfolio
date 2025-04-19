document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let form = document.querySelector("form");
    
    form.addEventListener("submit", login);
    
    function login(e) {
        e.preventDefault();
        let usernameOrEmail = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        
        let user = users.find((user) => 
            (user.username == usernameOrEmail || user.email == usernameOrEmail)
        );
        

        if (user && user.lockedUntil && new Date(user.lockedUntil) > new Date()) {
            const remainingTime = Math.ceil((new Date(user.lockedUntil) - new Date()) / 80000);
            toast(`Try again in ${remainingTime} minutes`);
            return;
        }
        
        if (user && user.password == password) {
            user.loginAttempts = 0;
            user.lockedUntil = null;
            user.isLoggedIn = true;
            localStorage.setItem("users", JSON.stringify(users));
            
            toast("Login Successful");
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            if (user) {
                user.loginAttempts = (user.loginAttempts || 0) + 1;
                
                if (user.loginAttempts >= 3) {
                    const lockTime = new Date();
                    lockTime.setMinutes(lockTime.getMinutes() + 15);
                    user.lockedUntil = lockTime;
                    toast("Too many failed attempts. Account locked for 10 minutes.");
                } else {
                    toast(`Invalid username or password. ${3 - user.loginAttempts} attempt remaining`);
                }
                
                localStorage.setItem("users", JSON.stringify(users));
            } else {
                toast("Invalid username or password");
            }
        }
    }
    
    let toast = (text) => {
        Toastify({
            text: text,
            duration: 2000,
            gravity: "top",
            position: "right",
            style: {
                background: text.includes("Invalid") ? "linear-gradient(to right, #ff5f6d, #ffc371)" : "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    };
});