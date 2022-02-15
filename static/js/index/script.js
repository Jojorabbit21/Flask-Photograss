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