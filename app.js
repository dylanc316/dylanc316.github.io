var allPages = document.querySelectorAll(".page");
var allButtons = document.querySelectorAll(".button");
allButtons[0].style.textDecorationLine = "underline";
for (var i = 1; i < allPages.length; i++) {
    allPages[i].style.display = "none";
}

function toggle(n) {
    for (var i = 0; i < allPages.length; i++) {
        if (i == n) {
            allPages[i].style.display = "inline-block";
            allButtons[i].style.textDecorationLine = "underline";
        }
        else {
            allPages[i].style.display = "none";
            allButtons[i].style.textDecorationLine = "none";
        }
    }
}