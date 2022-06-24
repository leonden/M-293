// CURSOR START

function cursorMove() {
  var cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
}

function detectDevice() {
  if ("ontouchstart" in document.documentElement) {
    document.styleSheets[1].disabled = true;
    const cursor = document.querySelector(".cursor");
    cursor.remove();
  } else {
    cursorMove();
  }
}

function hoverOverLink() {
  const cursor = document.querySelector(".cursor");
  // all links
  const links = document.querySelectorAll("a");
  // all accordion labels
  const labels = document.querySelectorAll(".label");
  // all home nav tiles
  const homeNav = document.querySelectorAll(".home-nav");
  // all work tiles
  const workTiles = document.querySelectorAll(".tile");

  // links
  for (let i = 0; i < links.length; i++) {
    // hover start
    links[i].addEventListener("mouseover", function (event) {
      cursor.classList.add("cursor-active");
    });

    // hover finish
    links[i].addEventListener("mouseout", function (event) {
      cursor.classList.remove("cursor-active");
    });
  }

  // accordion
  for (let i = 0; i < labels.length; i++) {
    // hover start
    labels[i].addEventListener("mouseover", function (event) {
      cursor.classList.add("cursor-active");
    });

    // hover finish
    labels[i].addEventListener("mouseout", function (event) {
      cursor.classList.remove("cursor-active");
    });
  }

  // home nav tiles
  for (let i = 0; i < homeNav.length; i++) {
    // hover start
    homeNav[i].addEventListener("mouseover", function (event) {
      cursor.classList.add("cursor-active");
    });

    // hover finish
    homeNav[i].addEventListener("mouseout", function (event) {
      cursor.classList.remove("cursor-active");
    });
  }

  // work tiles
  for (let i = 0; i < workTiles.length; i++) {
    // hover start
    workTiles[i].addEventListener("mouseover", function (event) {
      cursor.classList.add("cursor-active");
    });

    // hover finish
    workTiles[i].addEventListener("mouseout", function (event) {
      cursor.classList.remove("cursor-active");
    });
  }
}

detectDevice();
hoverOverLink();

// CURSOR FINISH
