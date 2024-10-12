let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Function to automatically move to the next slide
function autoSlide() {
  moveSlide(1); // Move to the next slide
}

// Initialize the slider to show the first slide
showSlide(0);

// Set interval for automatic sliding (e.g., every 3 seconds)
setInterval(autoSlide, 3000); // 3000 milliseconds = 3 seconds

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// script.js
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
