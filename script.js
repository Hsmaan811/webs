document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const wrapper = document.querySelector('.slideshow-wrapper');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = 100; // in percentage

    function showSlide(index) {
        wrapper.style.transform = `translateX(-${index * slideWidth}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Initial slide
    showSlide(currentIndex);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000); // Adjust timing as needed
});
