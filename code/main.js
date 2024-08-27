document.addEventListener("DOMContentLoaded", () => {
    alert("Page has loaded");

    let clickableHeader = document.getElementById("clickable");
    if(clickableHeader != null) {
        alert("found header")
    }
    clickableHeader.addEventListener("click", () => {
        alert("Clickable Element has been clicked!");
    })
});