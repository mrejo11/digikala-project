
// slider banner
let curSlideBanner = 0;

const sliderBanner = document.querySelectorAll(".slider-banner");
const containerBanner = document.querySelector(".container-banner");
const dotcontainer = document.querySelector(".dots");

const createDot = function () {
  sliderBanner.forEach(function (_, i) {
    dotcontainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot"data-slide="${i}"></button>`
    );
  });
};
createDot();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlideBanner = function (slide) {
  sliderBanner.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlideBanner(0);
const btnBannrLeft = document.querySelector(".btn--banner-left");
const btnBannerRight = document.querySelector(".btn--banner-right");

const maxslideBanner = sliderBanner.length;

const nextSlide = function () {
  if (curSlideBanner === 0) {
    curSlideBanner = maxslideBanner - 1;
  } else {
    curSlideBanner--;
  }

  goToSlideBanner(curSlideBanner);
  activateDot(curSlideBanner);
};

const previousSlide = function () {
  if (curSlideBanner === maxslideBanner - 1) {
    curSlideBanner = 0;
  } else {
    curSlideBanner++;
  }
  goToSlideBanner(curSlideBanner);
  activateDot(curSlideBanner);
};

btnBannerRight.addEventListener("click", nextSlide);
btnBannrLeft.addEventListener("click", previousSlide);

dotcontainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlideBanner(slide);
    activateDot(slide);
  }
});

const autoSlideInterval = 5000; // زمان تغییر خودکار (۵ ثانیه)
let slideInterval = setInterval(nextSlide, autoSlideInterval);

// توقف خودکار هنگام هاور
containerBanner.addEventListener("mouseover", () => {
  clearInterval(slideInterval);
});

// بازگردانی خودکار هنگام ترک هاور
containerBanner.addEventListener("mouseout", () => {
  slideInterval = setInterval(nextSlide, autoSlideInterval);
});