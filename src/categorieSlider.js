//CATEGORIE SECTION SLIDER
const categorie = document.querySelectorAll(".sales-container");
const catBtnright = document.querySelector(".hot-catri"); 
const catBtnLeft = document.querySelector(".hot-catle"); 

const catWidth = 330;

let curCat = 4;
const maxCat = categorie.length - 2;

const goToCat = function () {
  categorie.forEach(
    (s, i) =>
      (s.style.transform = `translateX(${(i - curCat) * catWidth}px)`)
  );
};

goToCat();

const previousCat = function () {
  if (curCat > 1) {
    curCat--;
    goToCat();
  }
};


const nextCat = function () {
  if (curCat <maxCat) {
    curCat++; 
    goToCat();
  }
};


catBtnLeft.addEventListener("click", nextCat);
catBtnright.addEventListener("click", previousCat);