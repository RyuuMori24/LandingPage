const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const clientLogos = document.querySelectorAll(".client-logo");

// Toggle Menu Hamburger untuk Mobile
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Tutup menu saat link diklik
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

if (isTouchDevice) {
  clientLogos.forEach((logo) => {
    const row = logo.closest(".marquee-row");
    if (!row) return;

    const activateLogo = () => {
      row.classList.add("touch-pause");
      logo.classList.add("active");
    };

    const deactivateLogo = () => {
      row.classList.remove("touch-pause");
      logo.classList.remove("active");
    };

    logo.addEventListener("touchstart", activateLogo, { passive: true });
    logo.addEventListener("touchend", deactivateLogo);
    logo.addEventListener("touchcancel", deactivateLogo);
  });
}

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
