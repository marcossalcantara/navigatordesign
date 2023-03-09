function menu() {
    let menunav = document.querySelector(".material-symbols-outlined")
    let asidemenu = document.querySelector("#aside-menu")

    if (asidemenu.style.display == "none") {
        asidemenu.style.display = "flex";
        // btnmenu.style.display = "none"
    }

    else {
        asidemenu.style.display = "none";
    }
}