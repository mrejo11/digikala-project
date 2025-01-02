const brand = document.querySelectorAll(".brand a");
const brandBtn = document.querySelector(".brand-ri"); // دکمه سمت راست
const brandBtnLeft = document.querySelector(".barnd-le"); // دکمه سمت چپ

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
  // غیرفعال کردن دکمه چپ اگر به اولین کارت برسیم
  if (curBrand === 2) {
    brandBtnLeft.style.display = "none";
  }
  // نمایش دکمه راست
  brandBtn.style.display = "flex";
};

// حرکت به کارت بعدی (راست به چپ)
const nextBrand = function () {
  if (curBrand < maxBrand) {
    curBrand++; // حرکت به کارت بعدی
    goToBrand();
  }
  // غیرفعال کردن دکمه راست اگر به آخرین کارت برسیم
  if (curBrand === maxBrand) {
    brandBtn.style.display = "none";
  }
  // نمایش دکمه چپ
  brandBtnLeft.style.display = "flex";
};

// اتصال رویدادها به دکمه‌ها
brandBtnLeft.addEventListener("click", previousBrand); // دکمه چپ برای حرکت به کارت قبلی
brandBtn.addEventListener("click", nextBrand); // دکمه راست برای حرکت به کارت بعدی

// نمایش و پنهان کردن دکمه‌ها هنگام بارگذاری
brandBtnLeft.style.display = "none";
brandBtn.style.display = "flex";