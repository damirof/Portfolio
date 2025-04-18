document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find((user) => user.isLogined === true);
    
    let userWishlist = currentUser ? currentUser.wishlist : [];


    function creatWishlistItem() {
        userWishlist.forEach(item => {
            let wishlistItem = document.createElement("div");
            wishlistItem.classList.add("wishlist-item");
            wishlistItem.id = item.id;

            let Image = document.createElement("div");
            Image.classList.add("image");
            Image.style.backgroundImage = `url(${item.image})`;

            let img = document.createElement("img");
            img.src = `${item.image}`;

            let title = document.createElement("h3");
            title.classList.add("title");
            title.textContent = `${item.title}`;
        
            let category = document.createElement("p");
            category.classList.add("category");
            category.textContent = `${item.category}`;

            let price = document.createElement("p");
            price.classList.add("price");
            price.textContent = `$${item.price}`;

            let removeBtn = document.createElement("button");
            removeBtn.classList.add("btn", "btn-danger");
            removeBtn.textContent = "Remove";

            removeBtn.addEventListener("click", () => {
                removeFromWishlist(item.id);
            });
            Image.appendChild(img);
            wishlistItem.appendChild(Image);
            wishlistItem.appendChild(title);
            wishlistItem.appendChild(category);
            wishlistItem.appendChild(price);
            wishlistItem.appendChild(removeBtn);
            document.querySelector(".wishlist-items").appendChild(wishlistItem);


        });

    }



});