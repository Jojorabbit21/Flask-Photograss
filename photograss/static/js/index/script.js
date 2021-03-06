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

function zoomImage(pathname, element) {
  var filename = element.getAttribute('imgsrc');
  var modal = document.getElementsByClassName('modal')[0];
  var modal_image = document.getElementsByClassName('modal-image')[0];
  var status = modal.getAttribute('status');

  if(status == "hidden") {
    modal_image.setAttribute('src',"/static/image" + pathname + '/' + filename);
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
  else if(pathname == '/project') {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu-nav');

    document.body.style.width = vw + "px";
    document.body.style.height = vh + "px";
    header.style.width = vw + "px";
    header.style.height = "auto";
    menu.style.height = vh + "px";  
  }
}