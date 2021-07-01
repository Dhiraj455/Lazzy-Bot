const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".box");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberSlides = slides.length;
var slideNumber = 0;

nextBtn.addEventListener("click", () => {
    slideNumber++;
    slides.forEach((box) => {
        box.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    if(slideNumber > (numberSlides - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
    slides.forEach((box) => {
        box.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    slideNumber--;
    if(slideNumber < 0){
        slideNumber = numberSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});