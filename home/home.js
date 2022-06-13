const about = document.querySelector("#home-about");
const circleLeft = document.querySelector("#circle-left");
// --------------------------------------------------
const work = document.querySelector("#home-work");
const circleTop = document.querySelector("#circle-top");
// --------------------------------------------------
const photo = document.querySelector("#home-photo");
const circleRight = document.querySelector("#circle-right");
// --------------------------------------------------
const contact = document.querySelector("#home-contact");
const circleBottom = document.querySelector("#circle-bottom");
// --------------------------------------------------
const body = document.querySelector("body");
const circle = document.querySelectorAll(".circle");
const homeNav = document.querySelector("home-nav");

about.addEventListener("mouseover", () => {
  circleLeft.style.left = "-8em";
  about.classList.add("active");
});

work.addEventListener("mouseover", () => {
  circleTop.style.top = "-4em";
  work.classList.add("active");
});

photo.addEventListener("mouseover", () => {
  circleRight.style.right = "-8em";
  photo.classList.add("active");
});

contact.addEventListener("mouseover", () => {
  circleBottom.style.bottom = "-4em";
  contact.classList.add("active");
});

if (homeNav.classList.contains(active)) {
  body.addEventListener("click", () => {
    console.log("clicked");
    circle.style.left = "-12em";
    homeNav.classList.remove("active");
  });
}
