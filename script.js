let pre = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  pre.classList.add("hidden");
});

let overlay = document.querySelector("[data-overlay]");
let nav = document.querySelector("[data-nav]");
let toggles = document.querySelectorAll("[data-toggle]");

// Toggle nav and overlay on menu button click
toggles.forEach(function (toog) {
  toog.addEventListener("click", function () {
    nav.classList.toggle("translate-x-0");
    nav.classList.toggle("left-0");
    nav.classList.toggle("left-[-250px]");
    overlay.classList.toggle("opacity-100");
    overlay.classList.toggle("pointer-events-auto");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("pointer-events-none");
  });
});

// Hide nav and overlay when overlay is clicked
overlay.addEventListener("click", function () {
  nav.classList.remove("translate-x-0", "left-0");
  nav.classList.add("left-[-250px]");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  overlay.classList.add("opacity-0", "pointer-events-none");
});
