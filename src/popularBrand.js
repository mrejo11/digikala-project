const brand = document.querySelectorAll(".brand a");
const brandBtn = document.querySelector(".brand-ri");   
const brandBtnLeft = document.querySelector(".barnd-le");   

const brandWidth = 142;

let curBrand = 2;
const maxBrand = brand.length - 1;

const goToBrand = function () {
  brand.forEach(
    (s, i) =>
      (s.style.transform = `translateX(${(i - curBrand) * brandWidth}px)`)
  );
};

goToBrand();

const previousBrand = function () {
  if (curBrand > 2) {
    curBrand--;
    goToBrand();
  }
  // disable left button if we reach first card
  if (curBrand === 2) {
    brandBtnLeft.style.display = "none";
  }
  // show right button
  brandBtn.style.display = "flex";
};


const nextBrand = function () {
  if (curBrand < maxBrand) {
    curBrand++; // move to next card
    goToBrand();
  }
  
  if (curBrand === maxBrand) {
    brandBtn.style.display = "none";
  }
  
  brandBtnLeft.style.display = "flex";
};


brandBtnLeft.addEventListener("click", previousBrand); 
brandBtn.addEventListener("click", nextBrand); 

// when we first time load the page
brandBtnLeft.style.display = "none";
brandBtn.style.display = "flex";