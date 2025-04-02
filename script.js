document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.5s ease-in-out";
    });

    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
