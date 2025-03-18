import { apartmentsData } from "./apartmentsdata.js";


document.addEventListener("DOMContentLoaded", function() {
const detailsModal = document.querySelector(".details-modal");
const modalCarousel = document.getElementById("img-carousel");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const closeBtn = document.getElementById("close-btn");
const imageWrapper = document.getElementById("img-wrapper");
const modalTitle = document.getElementById("modal-title");
const amenitiesList = document.getElementById("modal-amenities");
const roomDescription = document.getElementById("rm-description");
const facilitiesList = document.getElementById("modal-facilities")

    document.querySelectorAll(".view-details").forEach((btn) => {
        btn.addEventListener("click", function() {
            const apartmentID = parseInt(this.closest(".apartment-card").dataset.id);
            const apartment = apartmentsData.find((a => a.id === apartmentID));
            
            if(apartment) {
                
                /* DYNAMICALLY ADDING ICONS AND APARTMENT TEXT */
                imageWrapper.innerHTML = ""  
                amenitiesList.innerHTML = ""
                facilitiesList.innerHTML = ""
                modalTitle.textContent = apartment.name; 
                roomDescription.textContent = apartment.description; 
                let imageWidth; // <- storing image width value 


                apartment.facilities.forEach((facility) => {
                    const liElement = document.createElement("li");
                    const iconElement = document.createElement("i");
                    

                    switch(facility) {
                        case "1 extra-large double bed":
                        iconElement.className = "fa-solid fa-bed";
                        break;
                        case "1 sofa bed": 
                        iconElement.className = "fa-solid fa-bed";
                        break;
                        case "1 double bed":
                        iconElement.className = "fa-solid fa-bed";
                        break;
                        case "2 extra-large double beds":
                        iconElement.className = "fa-solid fa-bed";
                        break;
                        default: 
                        iconElement.className = "fa-solid fa-check";
                        break;
                    }

                    const spanElement = document.createElement("span");
                    spanElement.textContent = facility;
                    
                    liElement.append(iconElement, spanElement);
                    facilitiesList.appendChild(liElement);

            
                })
                
                apartment.general.forEach((amenity) => {
                    const liElement = document.createElement("li");
                    const iconElement = document.createElement("i");
                    
                    // Adding icons according to the amenity //
                    switch (amenity) {
                        case "Entire apartment":
                            iconElement.className = "fa-solid fa-house";
                            break;
                            case "Entire studio":
                            iconElement.className = "fa-solid fa-house";
                            break;
                            case "Free WiFi":
                            iconElement.className = "fa-solid fa-wifi";
                            break;
                            case "Private bathroom":
                            iconElement.className = "fa-solid fa-shower";
                            break;
                            case "Private kitchen":
                            iconElement.className = "fa-solid fa-utensils";
                            break;
                            case "Private kitchenette":
                            iconElement.className = "fa-solid fa-utensils";
                            break;
                            case "Flat-screen TV":
                            iconElement.className = "fa-solid fa-tv";
                            break;
                            case "Air conditioning":
                            iconElement.className = "fa-solid fa-snowflake";
                            break;
                            case "Balcony":
                            iconElement.className = "fa-solid fa-city";
                            break;
                            case "View":
                            iconElement.className = "fa-solid fa-city";
                            break;
                        default:
                            iconElement.className = "fa-solid fa-circle";
                    }

                    const spanElement = document.createElement("span");
                    spanElement.textContent = amenity;

                    liElement.append(iconElement, spanElement);
                    amenitiesList.appendChild(liElement);
                    
                   
                })

                apartment.images.forEach((imgsrc) => {
                    const imgElement = document.createElement("img");
                    imgElement.classList.add("modal-image");
                    imgElement.src = imgsrc;
                    imageWrapper.appendChild(imgElement);
                })
                
                
              
                /* Image Carousel Logic */
                document.querySelector(".modal-image").addEventListener("load", function() {
                    imageWidth = getScrollAmount(this); // <-- returns image width + gap value
                })

            
                nextBtn.addEventListener("click", function() {
                    modalCarousel.scrollLeft += imageWidth; 
                })
                

                prevBtn.addEventListener("click", function() {
                    modalCarousel.scrollLeft -= imageWidth;
                
                })
                    
            }

            modalOpen();
    
        })
    })


    


/* GETTING IMAGES WIDTH AND GAP */
function getScrollAmount(image) {
    const modalImageWidth = image.clientWidth;
    const modalImageGap = parseInt(getComputedStyle(image).margin);
    const scrollAmount = modalImageGap + modalImageWidth;
    return scrollAmount;
}

/* CLOSE MODAL WITH CLICK AND ESC */
closeBtn.addEventListener("click", function() {
    modalClose()
})


/* CLOSE MODAL WHEN CLICK OUTSIDE */
document.addEventListener("click", function(event) {
    if(detailsModal.classList.contains("modal-hidden")) return;
    if(!detailsModal.contains(event.target) && !event.target.classList.contains("view-details")) {
        modalClose();
    }
})


document.addEventListener("keydown",function(event) {

    if(event.key === "Escape") {
        modalClose();
    }
})

function modalClose() {
    detailsModal.classList.add("modal-hidden");
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
}

function modalOpen() {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
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


