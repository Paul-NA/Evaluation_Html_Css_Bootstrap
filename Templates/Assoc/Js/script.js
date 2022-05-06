
let ScrollToTop = document.getElementById("scrollToTop");

window.onscroll = function () {showButton();};

function showButton() {
    ScrollToTop.style.display = ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none");
}
ScrollToTop.addEventListener("click", isOnTop);

function isOnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}