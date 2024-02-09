const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navigation = document.querySelector(".main-nav");

// Mobile Navigation
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling
navigation.addEventListener("click", function (e) {
  e.preventDefault();

  const el = e.target.closest(".main-nav-link");
  if (!el) return;

  const id = el.getAttribute("href");
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth" });

  if (el.classList.contains("main-nav-link")) {
    header.classList.toggle("nav-open");
  }
});
