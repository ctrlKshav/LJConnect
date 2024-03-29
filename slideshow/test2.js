function pauseSlides() {
    var slides = document.querySelectorAll('.slider > *');
    slides.forEach(slide => {
        slide.style.animationPlayState = 'paused';
    });
}

function playSlides() {
    var slides = document.querySelectorAll('.slider > *');
    slides.forEach(slide => {
        slide.style.animationPlayState = 'running';
    });
}