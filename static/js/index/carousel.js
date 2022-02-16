const slideList = document.querySelector('.slide-list');
const slideItems = document.querySelectorAll('.slide-item');
const slideBtnNext = document.querySelector('.btn-next');
const slideBtnPrev = document.querySelector('.btn-prev');

const slideLen = slideItems.length;
const slideStart = 0;

const slideWidth = 1920; // Viewport width size (fullscreen)
const slideSpeed = 800; // Bigger = Slower

var curIndex = 0;
var curSlide = slideItems[curIndex];
curSlide.classList.add('slide-active');

// Set Slider Box Width Size
slideList.style.width = slideWidth * (slideLen + 2) + "px";

// Clone Last, First slide;
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Append Last, First clone slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

// Set Initial slide to first one
slideList.style.transform = "translate3d(-" + (slideWidth*(slideStart+1)) + "px, 0px, 0px)";

// Transform pages
slideBtnNext.addEventListener('click', function() {
  if(curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = "translate3d(-" + (slideWidth*(curIndex+2)) + "px, 0px, 0px)";
  }
  if (curIndex == slideLen -1) {
    setTimeout(function() {
      slideList.style.transition = '0ms';
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove('slide-active');
  curSlide = slideItems[++curIndex];
  curSlide.classList.add('slide-active')
});

slideBtnPrev.addEventListener('click', function() {
  if(curIndex >= 0) {
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
  }
  if (curIndex == 0) {
    setTimeout(function() {
      slideList.style.transition = '0ms';
      slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = slideLen;
  }
  curSlide.classList.remove('slide-active');
  curSlide = slideItems[--curIndex];
  curSlide.classList.add('slide-active')
}); 
