let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

showSlides(); // Initial call to show slides
let slideInterval = setInterval(nextSlide, 20000); // Auto transition every 20 seconds

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}