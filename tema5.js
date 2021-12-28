let closeButtons = document.querrySelectorAll(#popup.headerClose);
let ourCloseButto = closeButtons[0];

ourCloseButton.addEventListener("click", function() {
    let ourPopup = document.getElementById("popup");
    ourPopup.style.display = "none";
});