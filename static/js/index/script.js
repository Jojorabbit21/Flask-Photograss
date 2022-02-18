function slideMenu() {
  var menu = document.getElementById('menu');
  var status = menu.getAttribute('status');
  if(status == 'hidden') {
    menu.setAttribute('status','show');
  }
  else {
    menu.setAttribute('status','hidden');
  }
}

function zoomImage(element) {
  var filename = element.getAttribute('imgsrc');
  var modal = document.getElementsByClassName('modal')[0];
  var modal_image = document.getElementsByClassName('modal-image')[0];
  var status = modal.getAttribute('status');

  if(status == "hidden") {
    modal_image.setAttribute('src',"/static/image/snap/" + filename);
    modal.setAttribute('status','visible');
  }
  else {
    modal.setAttribute('status','hidden');
  }
}

var pathname = window.location.pathname;
window.onload = function() {
  var vw = window.innerWidth;
  var vh = window.innerHeight;
  if(pathname == '/main') {
    var slideBox = document.querySelector('.slide-box');
    var slideItem = document.querySelectorAll('.slide-item');
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu-nav');

    document.body.style.width = vw + "px";
    document.body.style.height = vh + "px";
    slideBox.style.width = vw + "px";
    slideBox.style.height = vh + "px";
    header.style.width = vw + "px";
    header.style.height = "auto";
    menu.style.height = vh + "px";

    for(var i=0; i<slideItem.length; i++) {
      slideItem[i].style.width = vw + "px";
      slideItem[i].style.height = vh + "px";
    }
  }
  else if(pathname == '/contact') {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu-nav');
    var container = document.querySelector('.container');
    
    document.body.style.width = vw + "px";
    document.body.style.height = vh + "px";
    container.style.width = vw + "px";
    container.style.height = vh + "px";
    header.style.width = vw + "px";
    header.style.height = "auto";
    menu.style.height = vh + "px";
  }
  else if(pathname == '/snap') {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu-nav');

    document.body.style.width = vw + "px";
    document.body.style.height = vh + "px";
    header.style.width = vw + "px";
    header.style.height = "auto";
    menu.style.height = vh + "px";
  }
  else if(pathname.indexOf('/project/') > -1) {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu-nav');

    document.body.style.width = vw + "px";
    document.body.style.height = vh + "px";
    header.style.width = vw + "px";
    header.style.height = "auto";
    menu.style.height = vh + "px";
    
    var project_container = document.querySelector('.project-img-container');
    var project_contents = document.querySelectorAll('.project-img-box');
    var totalWidth = 0;
    for(var i=0; i<project_contents.length; i++) {
      totalWidth += project_contents[i].offsetWidth;
    }
    project_container.style.width = totalWidth + 200 + "px";
  }
}

let draggableSlider = function () {
  // DOM element(s)
  let slider = document.querySelector(".project-img-container"),
    innerSlider = document.querySelector(".project-img-container-inner");

  // Slider variables
  let pressed = false,
    startX,
    x;

  // Mousedown eventlistener
  slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });

  // mouseneter
  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
  });

  // mouseup
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });

  // window
  window.addEventListener("mouseup", () => {
    pressed = false;
  });

  // Slider mousemove event listener
  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundry();
  });

  // Check boundry of outer and inner sliders
  function checkBoundry() {
    let outer = slider.getBoundingClientRect(),
      inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
};

// Invoke code
draggableSlider();