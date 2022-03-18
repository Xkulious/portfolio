const backgroundImage = document.querySelector(".MeatnPotatos");
const backgroundTrans = document.querySelector(".background-trans");
const resume = document.querySelector("#resume");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");

resume.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/resume.jpg')";
});

resume.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "";
});

contact.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/call.jpg')";
});

contact.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "";
});

projects.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/projects.jpg')";
});

projects.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "";
});