
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function() {
    
    const navbar = document.getElementById("nav-bar");
    const menuAnimate = document.querySelector(".fa-bars");
    menuAnimate.classList.toggle("rotate-menu")
    navbar.classList.toggle("show-menu");

    
});


const images = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalImages;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
});

function updateCarousel() {
  const offset = -index * 400; // 400px е ширината на снимката
  images.style.transform = `translateX(${offset}px)`;
}