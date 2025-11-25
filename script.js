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


// placement
// // Swiper Auto Carousel for Placement Partners
var swiper = new Swiper(".partnersSlider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
    }
});

