const navbar = document.querySelector(".nav-bar");
const logoText=document.querySelector("#logo-text")

document.addEventListener("DOMContentLoaded", () => {
  console.log(window.scrollY);
  function scrolled() {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
      logoText.classList.add("scrolled-logo")
    } else {
      navbar.classList.remove("navbar-scrolled");
      logoText.classList.remove("scrolled-logo")
    }
  }
  window.addEventListener("scroll", scrolled);
});


