const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  links.classList.toggle("active");
});

const html = document.querySelector("html");
const button = document.querySelector(".bx-sun");

button.addEventListener("click", () => {
  html.classList.toggle("dark-mode");
});
