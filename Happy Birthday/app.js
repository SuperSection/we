const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const wishesMenu = document.querySelector('#wishes-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    wishesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    wishesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    wishesMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// -------------- 3D CAROUSEL -------------- //

// var radius = 240;
// var autoRotate = true;
// var rotateSpeed = -60;
// var imgWidth = 120;
// var imgHeight = 170;


// setTimeout(init, 1000)

// var odrag = document.getElementById('drag-container');
// var ospin = document.getElementsById('swiper');
// var aImg = ospin.getElementsByTagName('img');
// var aEle = [...aImg];

// ospin.style.width = imgWidth + "px";
// ospin.style.height = imgHeight + "px";

// var ground = document.getElementById('ground');
// ground.style.width = radius * 3 + "px";
// ground.style.height = radius * 3 + "px";

// function init(delayTime) {
//   for (var i = 0; i < aEle.length; i++) {
//     aEle[i].style.transform = "rotateY(" + (i *(360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
//     aEle[i].style.trasition = "transform 1s";
//     aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//   }
// }

// function applyTransform (obj){
//   if (tY > 180) tY = 180;
//   if (tY < 0) tY = 0;

//   obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tx) + "deg)";
// }

// function playSpin(yes) {
//   ospin.style.animationPlayState = (yes? 'running': 'paused');
// }

// var sX, sY, nX, nY, desX = 0,
// desY = 0,
// tX = 0,
// tY = 10;

// if (autoRotate) {
//   var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
//   ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear `;
// }

// document.onpointerdown = function (e) {
//   clearInterval(odrag.timer);
//   e = e || window.event;
//   var sX = e.clientX,
//       sY = e.clientY;

//   this.onpointermove = function (e) {
//     e = e || window.event;
//     var nX = e.clientX,
//         nY = e.clientY;
//     desX = nX - sX;
//     desY = nY - sY;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTransform(odrag);
//     sX = nX;
//     sY = nY;
//   } ;

//   this.onpointerup = function (e) {
//     odrag.timer = setInterval(function(){
//       desX *= 0.95;
//       desY *= 0.95;
//       tX += desX * 0.1;
//       tY += desY * 0.1;
//       applyTransform(odrag);
//       playSpin(false);
//       if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//         clearInterval(odrag.timer);
//         playSpin(true);
//       }
//     }, 17);
//     this.onpointermove = this.onpointerup = null;
//   };

//   return false
// };

// document.onmousewheel = function (e) {
//   e = e || window.event;
//   var d = e.wheelDelta / 20 || -e.details;
//   radius += d;
//   init(1);
// };
