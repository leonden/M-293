const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body");

const navSlide = () => {
  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 250ms ease forwards ${
          index / 7 + 0.25
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");

    if (burger.classList.contains("toggle")) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "unset";
    }
  });
};

navSlide();
