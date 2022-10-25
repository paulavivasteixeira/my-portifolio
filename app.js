const app = {};

// DOM Elements
app.hamburgerBtn = document.querySelector(".navToggler");
app.navMenu = document.querySelector(".navMenu");



// Responsive Nav Bar
app.hamburgerBtn.addEventListener("click", () => {
  app.hamburgerBtn.classList.toggle("active");
  app.navMenu.classList.toggle("active");
})

document.querySelectorAll('.navItem').forEach(n => n.addEventListener("click", () => {
  app.hamburgerBtn.classList.remove("active");
  app.navMenu.classList.remove("active");
}))
// end Nav Bar

app.init();

