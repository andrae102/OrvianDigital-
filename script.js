window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

const elements = document.querySelectorAll(".card, h2");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});
