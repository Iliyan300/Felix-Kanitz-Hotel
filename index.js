


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





