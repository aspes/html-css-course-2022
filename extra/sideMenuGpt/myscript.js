// Get elements
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

// Open the side menu when menu button is clicked
menuBtn.addEventListener('click', () => {
    sideMenu.style.width = '250px';
});

// Close the side menu when close button is clicked
closeBtn.addEventListener('click', () => {
    sideMenu.style.width = '0';
});

