let closeButtons = document.querySelectorAll("#popup .headerClose");
let ourCloseButton = closeButtons[0];

ourCloseButton.addEventListener("click", function() {
    let ourPopup = document.getElementById("popup");
    ourPopup.style.display = "none";
});