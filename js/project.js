const pDesc = document.querySelector(".pixelated");
const mDesc = document.querySelector(".mountains");
const pButton = document.querySelector(".pbutton");
const mButton = document.querySelector(".mbutton");

pButton.addEventListener("click", () => {
    pDesc.style.opacity = "1"
    document.body.style.backgroundImage = "url('images/pixelated.png')";
});

mButton.addEventListener("click", () => {
    mDesc.style.opacity = "1"
    document.body.style.backgroundImage = "url('images/relativeexpression.png')";
});