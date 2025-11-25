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



// navbar dropdown
document.querySelectorAll(".nav-item.dropdown").forEach(function(drop){
    drop.addEventListener("mouseenter", function(){
        let menu = drop.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("show");
    });

    drop.addEventListener("mouseleave", function(){
        let menu = drop.querySelector(".dropdown-menu");
        if (menu) menu.classList.remove("show");
    });
});



closeModal.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
