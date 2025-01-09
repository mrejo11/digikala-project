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



//suprizedTimer
const inputBoxes=document.querySelectorAll('.input-box')
const setTime=600

const startSuprizeTimer=()=>{
   let time=setTime

  //call timer every second
  const timerInterval=setInterval(()=>{
    if(time<0){
      time=setTime
    return;
  }

  const min=Math.floor(time/60);
  const sec=time%60;
//inEach call,print the remaining time to UI
    inputBoxes[2].textContent=Math.floor(min/10)
    inputBoxes[1].textContent=min%10<10?`0${min}`:min;
    inputBoxes[0].textContent=sec<10?`0${sec}`:sec;

    //decrese Is
    time--;
  },1000);
};

startSuprizeTimer()

