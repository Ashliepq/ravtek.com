// Variables Start
let $ = document;
let openNav = $.getElementById("open-nav");
let closeNav = $.getElementById("close-nav");
let nav = $.getElementById("navbar");
let slider = $.querySelector(".slider-images");
let sliderImages = $.querySelectorAll(".slider-images .image");
let next = $.getElementById("next");
let perv = $.getElementById("perv");
let imagesPercent = 100/sliderImages.length
let percent=0
let index=0

// Variables Ends

// Defined Sunctions Starts
function openMenu() {
  openNav.style.display = "block";
  nav.style.display = "none";
  closeNav.style.display = "none";
}
sliderImages.forEach(function(image){
  console.log(image);
  
})

function scrolled() {
  let sliderScrolledPX = slider.scrollLeft;
  let windowWidth = slider.scrollWidth - document.documentElement.clientWidth;
  percentOfScrolledSlider = (sliderScrolledPX * 100) / windowWidth;
  if (percentOfScrolledSlider >= percent && percentOfScrolledSlider <= percent+imagesPercent) {
    sliderImages.forEach(function(image){
      image.classList.remove("slider-images-animation");
    })
    sliderImages[index].classList.add("slider-images-animation");
  }else if(percentOfScrolledSlider >= percent+imagesPercent){
    index++
    percent+=imagesPercent
    sliderImages.forEach(function(image){
      image.classList.remove("slider-images-animation");
    })
    sliderImages[index].classList.add("slider-images-animation");

  }else if(percentOfScrolledSlider <= percent+imagesPercent){
    index--
    percent-=imagesPercent
    sliderImages.forEach(function(image){
      image.classList.remove("slider-images-animation");
    })
    sliderImages[index].classList.add("slider-images-animation");

  }

console.log(percent);


  


  // if (percentOfScrolledSlider >= 0 && percentOfScrolledSlider <= 32) {
  //   console.log("Animation");
  //   sliderImages[0].classList.add("slider-images-animation");
  //   sliderImages[2].classList.remove("slider-images-animation");
  //   sliderImages[1].classList.remove("slider-images-animation");
  // }
  // if (percentOfScrolledSlider >= 33 && percentOfScrolledSlider <= 65) {
  //   console.log("Animation");
  //   sliderImages[1].classList.add("slider-images-animation");
  //   sliderImages[0].classList.remove("slider-images-animation");
  //   sliderImages[2].classList.remove("slider-images-animation");
  // }
  // if (percentOfScrolledSlider >= 66 && percentOfScrolledSlider <= 100) {
  //   console.log("Animation");
  //   sliderImages[2].classList.add("slider-images-animation");
  //   sliderImages[1].classList.remove("slider-images-animation");
  //   sliderImages[0].classList.remove("slider-images-animation");
  // }
}
// Defined Sunctions Ends

// Nav Bar Codes Starts
openNav.addEventListener("click", function () {
  openNav.style.display = "none";
  nav.style.display = "flex";
  closeNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
  openMenu();
});

window.addEventListener("resize", function () {
  if (this.document.body.clientWidth > 600) {
    openNav.style.display = "none";
    nav.style.display = "flex";
    closeNav.style.display = "none";
  } else {
    openMenu();
  }
});
// Nav Bar Codes Ends

// Slider Codes Starts
console.log(document.documentElement.clientWidth);

slider.addEventListener("scroll", function (event) {
  scrolled();
});
scrolled()

// Slider Codes Ends

// Next And Perv Codes Starts

let goToNext =0
next.addEventListener("click",function(){
  let windowWidth = slider.scrollWidth - document.documentElement.clientWidth;
goToNext+= (imagesPercent*windowWidth/100)*1.5
slider.scrollLeft=goToNext
scrolled()

})

perv.addEventListener("click",function(){
  let windowWidth = slider.scrollWidth - document.documentElement.clientWidth;
  goToNext-= (imagesPercent*windowWidth/100)*1.5
  slider.scrollLeft=goToNext
  scrolled()

})
// Next And Perv Codes Ends