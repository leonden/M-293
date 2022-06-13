const about = document.querySelector("#home-about");
const work = document.querySelector("#home-work");
const photo = document.querySelector("#home-photo");
const contact = document.querySelector("#home-contact");
// --------------------------------------------------
const body = document.querySelector("body");
const homeNav = document.querySelector("home-nav");

about.addEventListener("mouseover", () => {
  about.classList.add("active");
});

work.addEventListener("mouseover", () => {
  work.classList.add("active");
});

photo.addEventListener("mouseover", () => {
  photo.classList.add("active");
});

contact.addEventListener("mouseover", () => {
  contact.classList.add("active");
});

if (homeNav.classList.contains(active)) {
  body.addEventListener("click", () => {
    console.log("clicked");
    homeNav.classList.remove("active");
  });
}
