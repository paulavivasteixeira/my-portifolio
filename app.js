const hamburgerBtn = document.querySelector(".navToggler");
const navMenu = document.querySelector(".navMenu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('.navItem').forEach(n => n.addEventListener("click", () => {
  hamburgerBtn.classList.remove("active");
  navMenu.classList.remove("active");
}))