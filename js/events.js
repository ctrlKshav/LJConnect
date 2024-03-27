var slideIndex = 3;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


    if(slideIndex === 1){
        prevButton.style.pointerEvents = "none";
        prevButton.style.display = "none";
    }else{
        prevButton.style.pointerEvents = "auto";
        prevButton.style.display = "inline";
    }

    if(slideIndex === 3){
        nextButton.style.pointerEvents = "none";
        nextButton.style.display = "none";
    }else{
        nextButton.style.pointerEvents = "auto";
        nextButton.style.display="inline";
    }

}