// Select the form and background elements
const form = document.querySelector("form");
const background = document.querySelector(".background-img");
const backgroundOverlay = document.querySelector(".background-overlay");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Conditional logic to toggle the background image and background overlay
  if (background.classList.contains("no-background")) {
    background.classList.remove("no-background");
    backgroundOverlay.classList.remove("background-overlay-color");
  } else {
    background.classList.add("no-background");
    backgroundOverlay.classList.add("background-overlay-color");
  }
});
