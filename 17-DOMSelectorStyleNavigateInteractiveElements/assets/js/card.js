document.addEventListener('DOMContentLoaded', function() {
    const favoriteBtn = document.querySelector('.favorite-btn');
    const contactBtn = document.querySelector('.contact-btn');
    const card = document.querySelector('.real-estate-card');
    
    // Favorite button functionality
    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        
        const action = this.classList.contains('active') ? 'added to' : 'removed from';
        console.log(`Property ${action} favorites`);
    });
    
    // Contact button functionality
    contactBtn.addEventListener('click', function() {
        alert('Contacting Tiffany Heffner at (555) 555-4321');
    });
    
    // Additional hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
});