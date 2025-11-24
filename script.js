document.querySelectorAll('.dropdown-item, .nav-link').forEach(link => {
    link.addEventListener('click', e => {

        if (link.getAttribute('href').startsWith("#")) {
            e.preventDefault();

            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });

            console.log("Navigated to section:", link.getAttribute('href'));
        }
    });
});


// FIX: Slider animation restart on resize
window.addEventListener("resize", () => {
    const slider = document.querySelector(".slides");

    if (slider) {
        slider.style.animation = "none";
        setTimeout(() => {
            slider.style.animation = "slideAnimation 16s infinite";
        }, 50);
    }
});


