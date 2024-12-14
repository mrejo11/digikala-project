const cards=document.querySelectorAll('.card')
const btnRightSup = document.querySelector(".sup-ri");
const btnLeftSup = document.querySelector(".sup-le");


//swiper-sup
let curCard=0;

const goToCard= function (card) {
  cards.forEach(
    (s, i) => (s.style.transform = `translateX(${4 * (i - card)}%)`)
  );
};
goToCard(0);

const maxCard=cards.length
const nextCard = function () {
  if (curCard === 0) {
    curCard = maxCard - 1;
  } else {
    curCard++;
  }

  goToCard(curCard);
};

const previousCard = function () {
  if (curCard === maxCard - 1) {
    curCard = 0;
  } else {
    curCard--;
  }
  goToCard(curCard);
};

btnRightSup.addEventListener("click", nextCard);
btnLeftSup.addEventListener("click", previousCard);


btnRightSup.addEventListener("click", function () {
    btnLeftSup.style.display = "flex"; 
  });
  
//timer count down