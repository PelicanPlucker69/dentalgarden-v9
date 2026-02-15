let slideIndex = 0;
showSlides();

// Show the slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    // Reset to the first slide
    slides[slideIndex - 1].style.display = "block";      // Show the current slide

    // Highlight the active thumbnail
    let thumbnails = document.getElementsByClassName("thumb");
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");

    setTimeout(showSlides, 20000);  // Change slide every 20 seconds (20000ms)
}

// Function for navigating slides manually (next/last buttons)
function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block";  // Show the current slide

    // Highlight the active thumbnail
    let thumbnails = document.getElementsByClassName("thumb");
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");
}

// Function for clicking on a thumbnail to go to a specific slide
function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}