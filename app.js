const navbar = document.querySelector(".nav-bar");
const logoText = document.querySelector("#logo-text");
const navLinks = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", () => {
  function scrolled() {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
      logoText.classList.add("scrolled-logo");
    } else {
      navbar.classList.remove("navbar-scrolled");
      logoText.classList.remove("scrolled-logo");
    }
  }
  window.addEventListener("scroll", scrolled);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("nav clicked");

      const targetId = this.getAttribute("href").substring(1);

      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        effect;
      }
    });
  });
});
