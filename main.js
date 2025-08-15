// Gestione menu mobile e smooth scroll
const openMobileMenu = document.getElementById("openMobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const mobileMenu = document.getElementById("mobileMenu");
const mobileBackdrop = document.getElementById("mobileBackdrop");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function showMobileMenu() {
  mobileMenu.classList.add("open");
  mobileBackdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileBackdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

openMobileMenu.addEventListener("click", showMobileMenu);
closeMobileMenu.addEventListener("click", hideMobileMenu);
mobileBackdrop.addEventListener("click", hideMobileMenu);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", hideMobileMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    hideMobileMenu();
  }
});

// ...existing code...

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Quando parte la riproduzione di un video, ferma tutti gli altri
    video.addEventListener('play', function () {
      videos.forEach(v => {
        if (v !== video) v.pause();
      });
    });
  });
});
// ...existing code...