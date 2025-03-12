


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



document.getElementById("open-studio").addEventListener("click", function(event) {



let container = event.target.parentElement;

let modal = document.createElement("div");
let roomTitle = document.createElement("h2");
let roomInfo = document.createElement("p");
let roomSize = document.createElement("h3");
let facilities = document.createElement("h3");



modal.appendChild(roomTitle)
modal.appendChild(roomInfo)
modal.appendChild(roomSize)
modal.appendChild(facilities)
container.appendChild(modal)
modal.classList.add("modal-active");

})

