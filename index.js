import { apartmentsData } from "./apartmentsdata.js";


document.addEventListener("DOMContentLoaded", function() {
const detailsModal = document.querySelector(".details-modal");
const modalCarousel = document.getElementById("img-carousel");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const closeBtn = document.getElementById("close-btn");
const imageWrapper = document.getElementById("img-wrapper");
const modalTitle = document.getElementById("modal-title");


    document.querySelectorAll(".view-details").forEach((btn) => {
        btn.addEventListener("click", function() {
            const apartmentID = parseInt(this.closest(".apartment-card").dataset.id);
            const apartment = apartmentsData.find((a => a.id === apartmentID));
            
            if(apartment) {

                modalTitle.textContent = apartment.name
                imageWrapper.innerHTML = ""
                let imageWidth;
               

                apartment.images.forEach((imgsrc) => {
                    const imgElement = document.createElement("img");
                    imgElement.classList.add("modal-image");
                    imgElement.src = imgsrc;
                    imageWrapper.appendChild(imgElement);
                })
                
                document.querySelector(".modal-image").addEventListener("load", function() {
                    imageWidth = getScrollAmount(this);
                    
                })

            
                nextBtn.addEventListener("click", function() {
                    modalCarousel.scrollLeft += imageWidth;
                })
                
                
                prevBtn.addEventListener("click", function() {
                    modalCarousel.scrollLeft -= imageWidth;
                
                })
                    
            }

        document.body.style.overflow = "hidden";
        document.body.style.pointerEvents = "none";
        modalOpen();
    
        })
    })






/* --- FUNCTIONALITY FOR MODAL - OPEN,CLOSE,MOVE IMAGES --- */




/* GETTING IMAGES WIDTH AND GAP */
function getScrollAmount(image) {
    const modalImageWidth = image.clientWidth;
    const modalImageGap = parseInt(getComputedStyle(image).margin);
    const scrollAmount = modalImageGap + modalImageWidth;
    return scrollAmount;
}



/* MOVE IMAGES LEFT AND RIGHT*/




/* CLOSE MODAL WITH CLICK AND ESC */
closeBtn.addEventListener("click", function() {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
    modalClose()
})



document.addEventListener("click", function(event) {
    if(detailsModal.classList.contains("modal-hidden")) return;
    if(!detailsModal.contains(event.target) && !event.target.classList.contains("view-details")) {
        document.body.style.overflow = "auto";
        document.body.style.pointerEvents = "auto";
        modalClose();
    }
})


document.addEventListener("keydown",function(event) {

    if(event.key === "Escape") {
        document.body.style.overflow = "auto";
        document.body.style.pointerEvents = "auto";
        modalClose();
    }
})

function modalClose() {
    detailsModal.classList.add("modal-hidden");
}

function modalOpen() {
    detailsModal.classList.remove("modal-hidden");
}

/* CHANGING BACKGROUND IMAGES FOR GOLF BAR */
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

/* MENU OPEN + ANIMATION */
document.getElementById("menu-icon").addEventListener("click", function() {
    
    const navbar = document.getElementById("nav-bar");
    const menuAnimate = document.querySelector(".fa-bars");
    menuAnimate.classList.toggle("rotate-menu")
    navbar.classList.toggle("show-menu");
    
});

changeBg()
setInterval(changeBg, 5000);

})


