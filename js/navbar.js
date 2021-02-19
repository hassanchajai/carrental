const close = document.querySelector(".close");
const bar = document.querySelector("header .navbar-toggler");
const navbar = document.querySelector("header .navbar-links");


const showbar = () => { navbar.classList.add("active") };
const hidebar = () => { navbar.classList.remove("active") };




bar.addEventListener("click", () => { navbar.classList.add("active") });
close.addEventListener("click", () => { navbar.classList.remove("active") });