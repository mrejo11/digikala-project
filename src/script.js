const locationdelivery = document.querySelector(".location-delivery");
const toolTip = document.querySelector(".tooltip");
const menu = document.querySelector(".main-links");
const subMenu = document.querySelector(".second-list");
const trigger = document.querySelector(".first-item");
const hiddenMenu = document.querySelector(".sub-nav");
const swiper = document.querySelector(".swiper-img");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

document.querySelectorAll(".nav__items a").forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX;

    // تشخیص ورود موس از کدام سمت
    if (mouseX < rect.left + rect.width / 2) {
      e.target.setAttribute("data-direction", "left");
    } else {
      e.target.setAttribute("data-direction", "right");
    }
  });
});

// locationdelivery.addEventListener("mouseover", () =>
//   toolTip.classList.remove("hidden")
// );

// locationdelivery.addEventListener("mouseout", () =>
//   toolTip.classList.add("hidden")
// );

//hidden menu
const movement = 10;
trigger.addEventListener("mouseover", () => {
  menu.classList.remove("hidden"), subMenu.classList.remove("hidden");
});

[trigger, menu, subMenu].forEach((el) => {
  el.addEventListener("mouseout", (e) => {
    const rectMenu = menu.getBoundingClientRect();
    const rectSubMenu = subMenu.getBoundingClientRect();
    const recttrigger = trigger.getBoundingClientRect();
    console.log(rectMenu);
    console.log(recttrigger);

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseY);

    const isoutmenu =
      mouseX <= rectMenu.left ||
      mouseX >= rectMenu.right ||
      mouseY <= rectMenu.top ||
      mouseY >= rectMenu.bottom;
    const isOutSubMenu =
      mouseX <= rectSubMenu.left ||
      mouseX >= rectSubMenu.right ||
      mouseY <= rectSubMenu.top ||
      mouseY >= rectSubMenu.bottom;

    const isOutTrigger =
      mouseX <= recttrigger.left ||
      mouseX >= recttrigger.right ||
      mouseY <= recttrigger.top;
    mouseY >= rectSubMenu.bottom;
    if (isoutmenu && isOutSubMenu && isOutTrigger) {
      menu.classList.add("hidden");
      subMenu.classList.add("hidden");
    }
  });
});

// //slider
// slides.forEach((s,i)=>s.style.transform=`translateX(${100*i}%)`)


const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${20 * (i - slide)}%)`)
  );
};
goToSlide(0);

let curSlide = 0;
const maxslide = slides.length;
btnRight.addEventListener("click", ()=> {
  curSlide === maxslide ? (curSlide = 0) : curSlide++;

  goToSlide(curSlide);
});

btnLeft.addEventListener("click", ()=> {
  curSlide === 0 ? (curSlide = maxslide-1) : curSlide--;

  goToSlide(curSlide)
});


// slider banner
let curSlideBanner=0;


const sliderBanner=document.querySelectorAll('.slider-banner')
const containerBanner=document.querySelector('.container-banner')

const goToSlideBanner = function (slide) {
  sliderBanner.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlideBanner(0);

  //  containerBanner.style.transform='scale(0.5)'
  // containerBanner.style.overflow='visible'

  sliderBanner.forEach(
   (s, i) => (s.style.transform = `translateX(${100*i}%)`)
 );

const btnBannrLeft=document.querySelector('.btn--banner-left')
const btnBannerRight=document.querySelector('.btn--banner-right')

const maxslideBanner=sliderBanner.length;
 
btnBannerRight.addEventListener("click", ()=> {
  curSlideBanner === maxslideBanner-1 ? (curSlideBanner = 0) : curSlideBanner++;

  goToSlideBanner(curSlideBanner);
});

btnBannrLeft.addEventListener("click", ()=> {
  curSlideBanner === 0 ? (curSlideBanner = maxslideBanner-1) : curSlideBanner--;
  

  goToSlideBanner(curSlideBanner)
});