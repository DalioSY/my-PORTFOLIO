const html = document.querySelector("html");
const body = document.querySelector("body");
const button = document.querySelector(".bx-sun");

button.addEventListener("click", () => {
  html.classList.toggle("dark-mode");
});

const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  links.classList.toggle("active");
});

links.addEventListener("click", () => {
  links.classList.toggle("active");
});
