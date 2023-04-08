
let calcScrollValue = () => {
  let scrollProgess = document.getElementById("progess");
  let progessValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeigth = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeigth);

  if (pos > 100){
    scrollProgess.style.display = "grid";
  } else {
    scrollProgess.style.display = "none";
  }

  scrollProgess.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  })
  scrollProgess.style.background = 'conic-gradient (#03cc65 ${scroolValue}%, #d7d7d7 ${scrollValue}%)';

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


    const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
  
// -------------------------------------------------------//
    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right="-200px";
    }



