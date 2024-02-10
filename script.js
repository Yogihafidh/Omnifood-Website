const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navigation = document.querySelector(".main-nav");
const heroSection = document.querySelector(".section-hero");
const allSection = document.querySelectorAll(".section");

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

// Sticky Navigation
const obsCallback = function (entry) {
  const ent = entry[0];

  if (!ent.isIntersecting) document.body.classList.add("sticky");
  if (ent.isIntersecting) document.body.classList.remove("sticky");
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(heroSection);

// Smooth Scrolling
const reveralCallback = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const reveralOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  reveralCallback,
  reveralOptions
);

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
