const locationdelivery = document.querySelector(".location-delivery");
const toolTip = document.querySelector(".tooltip");
const menu = document.querySelector(".main-links");
const subMenu = document.querySelector(".second-list");
const trigger = document.querySelector(".first-item");
const hiddenMenu = document.querySelector(".sub-nav");
const swiper = document.querySelector(".swiper-img");
const slides = document.querySelectorAll(".slide");


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
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

const slideWidths = 129;


let curSlide = 0; 
const maxSlide = slides.length - 10;


const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * slideWidths}px)`)
  );
};


goToSlide(curSlide);


const previousSlides = function () {
  if (curSlide > 0) {
    curSlide--; 
    goToSlide(curSlide);
  }
  
  if (curSlide === 0) {
    btnLeft.style.display = "none"; 
  }
 
  btnRight.style.display = "flex";
};


const nextSlides = function () {
  if (curSlide < maxSlide) {
    curSlide++; 
    goToSlide(curSlide);
  }
  
  if (curSlide === 8) {
    btnRight.style.display = "none";
  }
  
  btnLeft.style.display = "flex";
};


btnLeft.addEventListener("click", previousSlides); 
btnRight.addEventListener("click", nextSlides);    

// when first load bage we have==>>
btnLeft.style.display = "none";  
btnRight.style.display = "flex"; 

