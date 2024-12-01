const locationdelivery = document.querySelector(".location-delivery");
const toolTip = document.querySelector(".tooltip");
const menu = document.querySelector(".main-links");
const subMenu = document.querySelector(".second-list");
const trigger = document.querySelector(".first-item");
const hiddenMenu = document.querySelector(".sub-nav");

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

locationdelivery.addEventListener("mouseover", () =>
  toolTip.classList.remove("hidden")
);

locationdelivery.addEventListener("mouseout", () =>
  toolTip.classList.add("hidden")
);


//hidden menu
trigger.addEventListener("mouseover", () => {
  menu.classList.remove("hidden");
});

menu.addEventListener("mouseover", () => {
  subMenu.classList.remove("hidden");
});

[menu, subMenu].forEach((el) => {
  el.addEventListener("mouseout", (e) => {
    const rectMenu = menu.getBoundingClientRect();
    
    const rectSubMenu = subMenu.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const isoutmenu =
      mouseX < rectMenu.left ||
      mouseX > rectMenu.right ||
      mouseY < rectMenu.top ||
      mouseY > rectMenu.bottom;

    const isOutSubMenu =
      mouseX < rectSubMenu.left ||
      mouseX > rectSubMenu.right ||
      mouseY < rectSubMenu.top ||
      mouseY > rectSubMenu.bottom;
    if (isoutmenu && isOutSubMenu) {
      menu.classList.add("hidden");
      subMenu.classList.add("hidden");
    }
  });
});


