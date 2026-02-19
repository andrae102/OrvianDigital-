// Navbar background on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
