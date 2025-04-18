console.log("JS file connected");
const closeMobileNav = document.querySelector("#closeHamburger");
const hamburgerBtn = document.querySelector("#hamburgerBtn");

function toggleHamburgerMenu() {
    const mobileMenu = document.querySelector("#mobileMenu");
    
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex", "flex-col", "justify-center");
      } else {
        mobileMenu.classList.remove("flex", "flex-col", "justify-center");
        mobileMenu.classList.add("hidden");
      }
  }

closeMobileNav.addEventListener("click", toggleHamburgerMenu);
hamburgerBtn.addEventListener("click", toggleHamburgerMenu);