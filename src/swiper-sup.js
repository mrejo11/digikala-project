const cards = document.querySelectorAll('.card');
const btnRightSup = document.querySelector(".sup-ri"); // دکمه سمت راست
const btnLeftSup = document.querySelector(".sup-le"); // دکمه سمت چپ


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
  // غیرفعال کردن دکمه چپ اگر به اولین کارت برسیم
  if (curCard === 0) {
    btnLeftSup.style.display = "none"; 
  }
  // نمایش دکمه راست
  btnRightSup.style.display = "flex";
};

// حرکت به کارت بعدی (راست به چپ)
const nextCard = function () {
  if (curCard < maxCard) {
    curCard++; // حرکت به کارت بعدی
    goToCard(curCard);
  }
  // غیرفعال کردن دکمه راست اگر به آخرین کارت برسیم
  if (curCard === 3) {
    btnRightSup.style.display = "none";
  }
  // نمایش دکمه چپ
  btnLeftSup.style.display = "flex";
};

// اتصال رویدادها به دکمه‌ها
btnLeftSup.addEventListener("click", previousCard); // دکمه چپ برای حرکت به کارت قبلی
btnRightSup.addEventListener("click", nextCard);    // دکمه راست برای حرکت به کارت بعدی

// نمایش و پنهان کردن دکمه‌ها هنگام بارگذاری
btnLeftSup.style.display = "none";  // دکمه چپ در ابتدا غیرفعال است
btnRightSup.style.display = "flex"; // دکمه راست در ابتدا فعال است
