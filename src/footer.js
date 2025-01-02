const headerSection = document.querySelector(".header-container");

const btnScrollTo = document.querySelector(".scrollTo");

btnScrollTo.addEventListener("click", () => {
  //scrolling
  headerSection.scrollIntoView({ behavior: "smooth" });
});

//sticky navigation
// const initialCoords=headerSection.getBoundingClientRect();

// window.addEventListener('scroll',function(e){
//      if(window.scrollY>initialCoords.top){
//         headerSection.classList.add('sticky')
//      }else{
//         headerSection.classList.remove('sticky')
//      }
// })






