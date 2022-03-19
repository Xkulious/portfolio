const pDesc = document.querySelector(".pixelated");
const mDesc = document.querySelector(".mountains");
const oDesc = document.querySelector(".original");
const pButton = document.querySelector(".pbutton");
const mButton = document.querySelector(".mbutton");

document.body.style.backgroundImage = "url('images/white.png')";

pButton.addEventListener("click", () => {
    pDesc.style.opacity = "1";
    mDesc.style.opacity = "0";
    oDesc.style.opacity = "0";
    document.body.style.backgroundImage = "url('images/pixelated.png')";
    document.querySelector("h1").style.color = "black";
    document.querySelector("h3").style.color = "black";
});

mButton.addEventListener("click", () => {
    mDesc.style.opacity = "1";
    pDesc.style.opacity = "0";
    oDesc.style.opacity = "0";
    document.body.style.backgroundImage = "url('images/relativeexpression.png')";
    document.querySelector("h1").style.color = "white";
});