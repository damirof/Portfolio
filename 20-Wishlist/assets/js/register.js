document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email"); 
    let password = document.querySelector("#password");
    let confirmpassword = document.querySelector("#confirmpassword");
    

    const passStrg = document.createElement("div");
    passStrg.className = "password-strength";
    password.parentNode.appendChild(passStrg);
    
    password.addEventListener("input", function() {
        checkPasswordStrength(this.value);
    });
    
    function checkPasswordStrength(pwd) {
        const minLeng = pwd.length >= 8;
        const upperCase = /[A-Z]/.test(pwd);
        const lowerCase = /[a-z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const specialChar = /[!@#$%^&*]/.test(pwd);
        
        if (minLeng && upperCase && lowerCase && hasNumber && specialChar) {
            passStrg.innerHTML = '<i class="fas fa-check" style="color:green"></i>';
            passStrg.title = "Strong password";
            return true;
        } else {
            passStrg.innerHTML = '<i class="fas fa-times" style="color:red"></i>';
            passStrg.title = "Password must contain: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
            return false;
        }
    }
    
    form.addEventListener("submit", register);
    
    function register(e) {
        e.preventDefault();
        
        clearErrors();
        
        let isValid = true;
        
        if (name.value.trim() === "") {
            showError(name, "Name is required");
            isValid = false;
        }
        
        if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username.value)) {
            showError(username, "Username must be 3-20 chars (letters, numbers, _, -)");
            isValid = false;
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showError(email, "Please enter a valid email");
            isValid = false;
        }
        
        if (checkPasswordStrength(password.value)) {
            showError(password, "password min 8 ! ");
            isValid = false;
        }
        
        if (password.value !== confirmpassword.value) {
            showError(confirmpassword, "Passwords don't match");
            isValid = false;
        }
        
        let userExists = users.some(user => 
            user.username === username.value || user.email === email.value
        );
        
        if (userExists) {
            toast("Username or email already exists");
            isValid = false;
        }
        
        if (!isValid) return;
        
        let newUser = {
            id: uuidv4(),
            name: name.value.trim(),
            username: username.value.trim(),
            email: email.value.trim(),
            password: password.value,
            confirmpassword: confirmpassword.value,
            isLoggedIn: false,
            loginAttempts: 0,
            lockedUntil: null,
            createdAt: new Date().toISOString()
            wishlist: [],
        };
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        
        toast("Registration successful!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.style.color = "red";
        errorElement.style.fontSize = "0.8rem";
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
        input.classList.add("is-invalid");
    }
    
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(el => el.remove());
        document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
    }
    
    let toast = (text, isError = false) => {
        Toastify({
            text: text,
            duration: 2000,
            gravity: "top",
            position: "right",
            style: {
                background: isError 
                    ? "linear-gradient(to right, #ff5f6d, #ffc371)" 
                    : "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    };
});