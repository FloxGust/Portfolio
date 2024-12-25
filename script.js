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

function closeMenuOnClickOutside(event) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.getElementById('hamburger-menu');

  // Close the menu if clicking outside the menu or hamburger
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove('show');
      hamburger.textContent = '☰';
      document.removeEventListener('click', closeMenuOnClickOutside); // Remove listener after closing
  }
}

// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Carousel Functionality
function moveSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const inner = carousel.querySelector('.carousel-inner');
  const slides = carousel.querySelectorAll('img');
  let currentIndex = parseInt(carousel.dataset.index || 0);

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  carousel.dataset.index = currentIndex;
}


function toggleCard(card) {
  card.classList.toggle('flipped');
}

 // Get elements
 const downloadBtn = document.getElementById('download-btn');
 const popover = document.getElementById('popover');
 const overlay = document.getElementById('overlay');
 const confirmBtn = document.getElementById('confirm-btn');
 const cancelBtn = document.getElementById('cancel-btn');

 // Show popover when download button is clicked
 downloadBtn.addEventListener('click', (e) => {
     e.preventDefault();
     popover.style.display = 'block';
     overlay.style.display = 'block';
 });

 // Handle confirmation
 confirmBtn.addEventListener('click', () => {
     window.location.href = 'https://raw.githubusercontent.com//Resume/main/Resume.pdf';
     popover.style.display = 'none';
     overlay.style.display = 'none';
 });

 // Handle cancellation
 cancelBtn.addEventListener('click', () => {
     popover.style.display = 'none';
     overlay.style.display = 'none';
 });

 // Close popover if clicking outside of it
 overlay.addEventListener('click', () => {
     popover.style.display = 'none';
     overlay.style.display = 'none';
 });