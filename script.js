// Hamburger Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger-menu');
  
    // Toggle visibility of menu and change icon
    navLinks.classList.toggle('show');
    hamburger.textContent = navLinks.classList.contains('show') ? '⛌' : '☰';
  
    // Close menu if clicked outside
    document.addEventListener('click', closeMenuOnClickOutside);
  }



  document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        const prevButton = slider.parentElement.querySelector('.prev');
        const nextButton = slider.parentElement.querySelector('.next');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});