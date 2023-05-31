const menuToglle = document.querySelector(".menuToglle");
const menuNavList = document.querySelector(".menuNavList");

menuToglle.onclick = function () {
  menuNavList.classList.toggle("ativo");
};
