const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileNav = document.getElementById("mobileNav");

function openNav() {
    mobileNav.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
}


function closeNav() {
    mobileNav.style.display = "none",
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
}