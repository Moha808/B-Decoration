document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            // Toggle 'active' class on both the hamburger and the nav menu
            hamburgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }
});