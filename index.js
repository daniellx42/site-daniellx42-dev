const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 1000,
        left: 1000,
        behavior: "smooth"
    })
});