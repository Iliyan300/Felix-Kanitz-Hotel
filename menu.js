
export function toggleMenu() {
    const navbar = document.getElementById("nav-bar");
    const menuAnimate = document.querySelector(".fa-bars");
    menuAnimate.classList.toggle("rotate-menu");
    navbar.classList.toggle("show-menu");
}
