const backgroundImage = document.querySelector(".MeatnPotatos");
const resume = document.querySelector("#resume");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");

resume.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/resume.jpg')";
    backgroundImage.style.transition = ""
});

resume.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "";

});