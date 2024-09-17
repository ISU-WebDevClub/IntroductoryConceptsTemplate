// document.addEventListener("DOMContentLoaded", () => {
//     alert("Page has loaded");

//     let clickableHeader = document.getElementById("clickable");
//     if(clickableHeader != null) {
//         alert("found header")
//     }
//     clickableHeader.addEventListener("click", () => {
//         alert("Clickable Element has been clicked!");
//     })
// });


var confettiColors = ["#4986be", "#6946ae", "#A996ae"]

function targetedConfetti(){
    var target = document.getElementById("confetti").getBoundingClientRect()
    var screen = document.body.getBoundingClientRect()
    var xPos = (((target.left+target.right)/2)/window.innerWidth)
    var yPos = (((target.top+target.bottom)/2)/window.innerHeight)
    confetti({
        particleCount: 250,
        startVelocity: 30,
        spread: 1000,
        colors: confettiColors,
        ticks: 200,
        zIndex: 3,
        origin: {
        x: xPos.toFixed(3),
        y: yPos.toFixed(3)
        }
    });
}
