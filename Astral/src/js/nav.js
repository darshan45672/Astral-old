// console.log('nav.js loaded');
const nav = document.querySelectorAll("data-navlink");

nav.forEach((navLink) => {
    console.log(window.location.pathname);
    if (navLink.getAttribute("href") === window.location.pathname) {
        navLink.setAttribute("aria-current", "page")
    }
});
