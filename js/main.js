console.log("JS file connected");
let container = document.querySelector("#posterInfoContainer");

const closeMobileNav = document.querySelector("#closeHamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const hamburgerBtn = document.querySelector("#hamburgerBtn");

const posterInfo = [
    {   label:"🌟 Collectable bottle",
        content:"Orbitz bottles aren’t just for drinking—they're a perfect way to reconnect with friends. Stack them up and share the memories."
    },
    {   label:"🍊  Natural Flavors",
        content:"Natural flavors bring out the authentic taste of the ingredients, offering a fresher and more wholesome experience."
    },
    {   label:"🌱 Eco-friendly",
        content:"Eco-friendly products are designed with the environment in mind, reducing waste and minimizing harm to nature."
    }
];

posterInfo.forEach((info)=> {
    const button = document.createElement("button")
    button.className = "border-[2px] border-black rounded-[25px] h-[50px] hover:bg-[#FFA748] hover:text-white hover:border-none shadow-md w-[180px] "
    button.textContent = info.label

    const paragraph = document.createElement("p")

   let isDisplay = false;

    button.addEventListener("click", () => {
       isDisplay = !isDisplay
        if(isDisplay) {
            paragraph.innerHTML = info.content
            paragraph.className = "border-black rounded-[25px] w-full bg-white/30 backdrop-blur-sm p-[14px]"

        }else {
            paragraph.className = ""
            paragraph.innerHTML = ""
        }
    });

    container.appendChild(button)
    container.appendChild(paragraph)
})

function toggleHamburgerMenu() {

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