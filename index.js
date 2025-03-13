const modalCarousel = document.getElementById("img-carousel");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const modalImage = document.querySelector(".modal-image");

const allViewBtns = document.querySelectorAll(".view-details");
allViewBtns.forEach((btn) => {
    btn.addEventListener("click", function() {

        document.querySelector(".details-modal").style.display = "flex";
    })
})


function getScrollAmount(image) {
    const modalImageWidth = image.clientWidth;
    const modalImageGap = parseInt(getComputedStyle(image).margin);
    const scrollAmount = modalImageGap + modalImageWidth;
    return scrollAmount;
}


document.getElementById("details-view").addEventListener("click", function() {
    document.querySelector(".details-modal").style.display = "flex";
})


nextBtn.addEventListener("click", function() {
    modalCarousel.scrollLeft += getScrollAmount(modalImage);
})


prevBtn.addEventListener("click", function() {
    modalCarousel.scrollLeft -= getScrollAmount(modalImage);

})



function createBackgroundChanger(containerSelector, imageList) {
const golfBarContainer = document.getElementById(containerSelector)
let index = 0;

return function changeBackground() {
    golfBarContainer.style.backgroundImage = `url('${imageList[index]}')`;
    index = (index + 1) % imageList.length;
        
    }
}


const changeBg = createBackgroundChanger("golfbar", [
    "images/golf bar/golf-bar-1.jpg",
    "images/golf bar/golf-bar-2.jpg",
    "images/golf bar/golf-bar-3.jpg",
    "images/golf bar/golf-bar-4.jpg",
    ]
)


document.getElementById("menu-icon").addEventListener("click", function() {
    
    const navbar = document.getElementById("nav-bar");
    const menuAnimate = document.querySelector(".fa-bars");
    menuAnimate.classList.toggle("rotate-menu")
    navbar.classList.toggle("show-menu");
    
});

changeBg()
setInterval(changeBg, 5000);




