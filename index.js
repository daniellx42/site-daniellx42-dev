const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 800,
        left: 800,
        behavior: "smooth"
    })
});







const button = document.getElementById("bntPopUp")
const popup = document.querySelector(".popup-wrapper")

button.addEventListener("click", () => {
    popup.style.display = "block"
});

popup.addEventListener("click", () => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ["popup-close", "popup-wrapper"]
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = "none"
    }

})