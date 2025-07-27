const menu = document.getElementById("menu")
const smallNav = document.getElementById("small-nav")
const shop = document.getElementById("shop")
const dropMenu = document.querySelector(".dropdownMenu")

const smallMenu = () => {
    smallNav.classList.toggle("removeNav")
}

shop.addEventListener("mouseenter", () => {
    dropMenu.style.top = "70px"
})

shop.addEventListener("mouseleave", () => {
    dropMenu.style.top = "-450px"
})

dropMenu.addEventListener("mouseenter", () => {
    dropMenu.style.top = "70px"
})

dropMenu.addEventListener("mouseleave", () => {
    dropMenu.style.top = "-450px"
})