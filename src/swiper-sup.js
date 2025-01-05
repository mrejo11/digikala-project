const cards = document.querySelectorAll('.card');
const btnRightSup = document.querySelector(".sup-ri"); 
const btnLeftSup = document.querySelector(".sup-le"); 


const slideWidth = 150;


let curCard = 0; 
const maxCard = cards.length - 1;


const goToCard = function (card) {
  cards.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - card) * slideWidth}px)`)
  );
};


goToCard(curCard);


const previousCard = function () {
  if (curCard > 0) {
    curCard--; 
    goToCard(curCard);
  }
  
  if (curCard === 0) {
    btnLeftSup.style.display = "none"; 
  }
 
  btnRightSup.style.display = "flex";
};


const nextCard = function () {
  if (curCard < maxCard) {
    curCard++; 
    goToCard(curCard);
  }
  
  if (curCard === 3) {
    btnRightSup.style.display = "none";
  }
  
  btnLeftSup.style.display = "flex";
};


btnLeftSup.addEventListener("click", previousCard); 
btnRightSup.addEventListener("click", nextCard);    

// when first load bage we have==>>
btnLeftSup.style.display = "none";  
btnRightSup.style.display = "flex"; 
