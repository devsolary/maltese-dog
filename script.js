const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileNav = document.getElementById("mobileNav");

openBtn.addEventListener("click", 
function () {
    mobileNav.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", 
function () {
    mobileNav.style.display = "none",
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
})