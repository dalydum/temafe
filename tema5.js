let closeButtons = document.querySelectorAll("#popup .headerClose");
let ourCloseButton = closeButtons[0];
popup.style.display = 'none';

ourCloseButton.addEventListener("click", function() {
    let ourPopup = document.getElementById("popup");
    ourPopup.style.display = "none";
});
// moving the h1 content
var x = document.getElementById("h1").innerHTML;
document.getElementById("h11").innerHTML = x;
var a = document.getElementById("h1").innerHTML;
document.getElementById("h11").innerHTML = a;

//moving the p1 content
var b = document.getElementById("p1").innerHTML;
document.getElementById("p11").innerHTML = b;

//moving the p2 content
var c = document.getElementById("p2").innerHTML;
document.getElementById("p22").innerHTML = c;

//moving the divstrawberries content
var d = document.getElementsByClassName("s").innerHTML;
document.getElementsByClassName("s2").innerHTML = d;

// moving the ullist content
var e = document.getElementById("ullist").innerHTML;
document.getElementById("ullist2").innerHTML = e;
});

let list = document.getElementById("ullist").innerHTML;
console.log(list);