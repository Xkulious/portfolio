const display = document.querySelector(".display");
const body = document.body;
const pix = document.querySelector("#pixelated");
const mount = document.querySelector("#mountains");
const pixMeat = document.querySelector("#pixelated-meat");
const mountMeat = document.querySelector("#mountains-meat");

pix.addEventListener("click", () => {
    display.style.opacity = "1";
    body.style.backgroundImage = "url('images/pixelated.png')"
    pixMeat.style.opacity = "1";
    mountMeat.style.opacity = "0";
});

mount.addEventListener("click", () => {
    display.style.opacity = "1";
    body.style.backgroundImage = "url('images/relativeexpression.png')";
    pixMeat.style.opacity = "0";
    mountMeat.style.opacity = "1";
});