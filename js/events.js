    
// Initialize slide index array for each carousel
var slideIndex = [];

// Call showSlides function for each carousel
showSlides(1, 1); // For the first carousel
showSlides(1, 2); // For the second carousel
showSlides(1, 3); // For the third carousel

// Function to navigate to next or previous slide
function plusSlides(n, carouselIndex) {
    showSlides(slideIndex[carouselIndex] += n, carouselIndex);
}

// Function to navigate to a specific slide
function currentSlide(n, carouselIndex) {
    showSlides(slideIndex[carouselIndex] = n, carouselIndex);
}

// Function to display slides
function showSlides(n, carouselIndex) {
    var i;
    var slides = document.querySelectorAll(".carousel-section.carousel-" + carouselIndex + " .mySlides");
    var dots = document.querySelectorAll(".carousel-section.carousel-" + carouselIndex + " .dot");

    // Initialize slide index if not already set
    if (!slideIndex[carouselIndex]) {
        slideIndex[carouselIndex] = 1;
    }

    // Loop through slides and hide/display them
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Reset index if exceeds the number of slides
    if (n > slides.length) {
        slideIndex[carouselIndex] = 1;
    }
    if (n < 1) {
        slideIndex[carouselIndex] = slides.length;
    }

    // Display current slide and update dot indicator
    slides[slideIndex[carouselIndex] - 1].style.display = "block";
    dots[slideIndex[carouselIndex] - 1].classList.add("active");
}