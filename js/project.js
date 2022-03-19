const pDesc = document.querySelector(".pixelated");
const mDesc = document.querySelector(".mountains");
const oDesc = document.querySelector(".original");
const pButton = document.querySelector(".pbutton");
const mButton = document.querySelector(".mbutton");

document.body.style.backgroundImage = "url('images/white.png')";

pButton.addEventListener("click", () => {
    pDesc.style.opacity = "1";
    pDesc.style.visibility = "visible";
    document.body.style.backgroundImage = "url('images/pixelated.png')";
    document.querySelector("h1").style.color = "black";
    document.querySelector("h3").style.color = "black";
    mDesc.style.visibility = "hidden";
    oDesc.style.visibility = "hidden";
});

mButton.addEventListener("click", () => {
    mDesc.style.opacity = "1";
    mDesc.style.visibility = "visible";
    document.body.style.backgroundImage = "url('images/relativeexpression.png')";
    document.querySelector("h1").style.color = "white";
    pDesc.style.visibility = "hidden";
    oDesc.style.visibility = "hidden";
});