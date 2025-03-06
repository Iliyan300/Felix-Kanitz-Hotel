
const menuIcon = document.getElementById("menu-icon");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const carousel = document.getElementById("carousel-container");
const golfImages = document.querySelectorAll(".golf-bar-img");
const imagesWidth = golfImages[0].clientWidth;
const imageGapLeft = parseInt(window.getComputedStyle(golfImages[0]).marginLeft)
const imageGapRight = parseInt(window.getComputedStyle(golfImages[0]).marginRight)





menuIcon.addEventListener("click", function() {
    
    const navbar = document.getElementById("nav-bar");
    const menuAnimate = document.querySelector(".fa-bars");
    menuAnimate.classList.toggle("rotate-menu")
    navbar.classList.toggle("show-menu");

});


nextBtn.addEventListener("click", function() {
    const scrollAmount =  imagesWidth + imageGapLeft + imageGapRight;
    carousel.scrollLeft += scrollAmount;
    

})

prevBtn.addEventListener("click", function() {
    const scrollAmount = imagesWidth + imageGapLeft + imageGapRight;
    carousel.scrollLeft -= scrollAmount;
   

})





