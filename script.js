document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;
    const intervalTime = 3000; // Auto-play interval in milliseconds

    const updateCarousel = () => {
        const width = images[0].clientWidth;
        carouselImages.style.transform = `translateX(${-index * width}px)`;
    };

    const autoPlay = () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    };

    let autoPlayInterval = setInterval(autoPlay, intervalTime);

    prevButton.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
        clearInterval(autoPlayInterval); // Reset auto-play
        autoPlayInterval = setInterval(autoPlay, intervalTime);
    });

    nextButton.addEventListener("click", () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
        clearInterval(autoPlayInterval); // Reset auto-play
        autoPlayInterval = setInterval(autoPlay, intervalTime);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Additional animations can be added here

    // GSAP Animations
    gsap.from(".floating-icon", {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        repeat: -1,
        yoyo: true
    });

    gsap.from(".timeline-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });
});
