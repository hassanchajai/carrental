const close = document.querySelector(".close");
const bar = document.querySelector("header .navbar-toggler");
const navbar = document.querySelector("header .navbar-links");


const showbar = () => { navbar.style.display = "flex"; };
const hidebar = () => { navbar.style.display = "none"; };

const resize = () => {

    if (window.innerWidth > 677) {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }

}


window.onresize = resize;
bar.addEventListener("click", showbar);
close.addEventListener("click", hidebar);