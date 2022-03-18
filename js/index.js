const backgroundImage = document.querySelector(".MeatnPotatos");
const backgroundTrans = document.querySelector(".transparency");
const resume = document.querySelector("#resume");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");


backgroundImage.style.backgroundImage = "url('images/white2.png')";

resume.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/resume.jpg')";
});

resume.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "url('images/default.jpg')";
});

contact.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/call.jpg')";
});

contact.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "url('images/default.jpg')";
});

projects.addEventListener("mouseenter", () => {
    backgroundImage.style.backgroundImage = "url('images/projects.jpg')";
});

projects.addEventListener("mouseleave", () => {
    backgroundImage.style.backgroundImage = "url('images/default.jpg')";
});