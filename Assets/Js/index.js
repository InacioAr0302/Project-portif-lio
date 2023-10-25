const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});

navMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});
