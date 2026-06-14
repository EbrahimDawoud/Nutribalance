// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const navLinks = menu.querySelectorAll("a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("open");
});

// Close menu when clicking on any navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
  });
});

// Close menu when clicking the button
const contactButton = menu.querySelector(".primary-button");
if (contactButton) {
  contactButton.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
  });
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
  }
});
