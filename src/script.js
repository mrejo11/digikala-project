const locationdelivery=document.querySelector('.location-delivery')
const toolTip=document.querySelector('.tooltip')


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



  locationdelivery.addEventListener('mouseover',()=>
    toolTip.classList.remove('hidden')
  )

  locationdelivery.addEventListener('mouseout',()=>
     toolTip.classList.add('hidden')
  )
  