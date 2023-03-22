const header__list = document.querySelector(".header__list"),
      header_burger = document.querySelector(".header__menu-burger"),
      header__menu = document.querySelector(".header__menu"),
      header__menu_item = document.querySelectorAll(".header__menu-item"),
      circle = document.querySelector(".to-top-circle"),
      bg_dark = document.querySelector(".bg-dark"),
      body = document.querySelector("body"),
      header_x = document.querySelector(".header__menu-x")


function openMenu() {
    if(header_burger.style.display = "none"){
        header_x.style.display = "block"
        header__menu.classList.add("active-menu") 
        body.style.overflowY = "hidden"
    } 
}

function closeMenu() {
    if(header_x.style.display = "none") {
        header_burger.style.display = "block"
        header__menu.classList.remove("active-menu")
        body.style.overflowY = "scroll" 
        header_x.style.display = "none"
    }
}

header_burger.addEventListener('click', () => {
    openMenu()
})

header_x.addEventListener("click", () => {
    closeMenu()
})

bg_dark.addEventListener('click', () => {
    closeMenu()
})

header__menu_item.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu()
    })

})

window.addEventListener('scroll', () => {
    if(scrollY > 500) {
        circle.style.display = "block"
    } else{
        circle.style.display = "none"
    }
})




