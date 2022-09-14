const navEl = document.querySelector("#main")
topOfNav = navEl.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add("fixed-nav")
        document.body.style.paddingTop = navEl.offsetHeight + "px"
    } else {
        document.body.classList.remove("fixed-nav")
        document.body.style.paddingTop = 0
    }
})