let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenu = document.querySelectorAll("nav:first-child a")
let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenu = document.querySelectorAll("nav:nth-child(2) a")

horizontalMenu.forEach((menu)=>menu.addEventListener("click", (e)=>horizontalIndicator(e)))

function horizontalIndicator(e) {
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

verticalMenu.forEach((menu)=>menu.addEventListener("click", (e)=>verticalIndicator(e)))

function verticalIndicator(e) {
    verticalUnderline.style.left =e.currentTarget.offsetLeft + "px";
    verticalUnderline.style.width = e.currentTarget.offsetWidth +"px";
    verticalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
