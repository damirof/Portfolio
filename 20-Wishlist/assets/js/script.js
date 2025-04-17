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

    let card = document.querySelector("div");
    card.classList.add("card");

    let cardImage = document.querySelector("div");
    cardImage.classList.add("card-image");

    let img = document.querySelector("img");
    img.setAttribute("src", "https://via.placeholder.com/150");

    let cardContent = document.querySelector("div");
    cardContent.classList.add("card-content");

    let cardTitle = document.querySelector("h2");
    cardTitle.classList.add("card-title");

    let cardCategory = document.querySelector("p");
    cardCategory.classList.add("card-category");

    let cardFooter = document.querySelector("div");
    cardFooter.classList.add("card-footer");

    let cardPrice = document.querySelector("span");
    cardPrice.classList.add("card-price");

    let cardRating = document.querySelector("div");
    cardRating.classList.add("card-rating");

    let rate = document.querySelector("span");
    let reviews = document.querySelector("span");




    cardRating.append(rate, reviews);
    cardFooter.append(cardPrice, cardRating);
    cardContent.append(cardTitle, cardCategory, cardFooter);
    cardImage.append(img);
    card.append(cardImage, cardContent);

    let cards = document.querySelectorAll(".cards");
    cards.appendChild(card);


});
logoutUser();