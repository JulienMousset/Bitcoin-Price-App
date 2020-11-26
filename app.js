const logo = document.querySelector(".logo img");

logo.addEventListener("mouseenter", (e) => {
    logo.style.transition = "all 0.5s ease";
    logo.style.transform = "rotateZ(360deg)";
});

logo.addEventListener("mouseleave", (e) => {
    logo.style.transition = "all 0.5s ease";
    logo.style.transform = `rotateY(0deg) rotateX(0deg)`;
    logo.style.transform = "rotateZ(0deg)";
});