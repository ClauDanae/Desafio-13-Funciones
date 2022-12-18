function pintar(ele, color) {
    ele.style.backgroundColor = color
}

ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    pintar(ele, "yellow")
});