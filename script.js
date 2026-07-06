const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 150;

  // navbar effect
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // active link fix
  let current = "";

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      current = sec.id;
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});