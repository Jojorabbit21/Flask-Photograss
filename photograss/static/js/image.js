var modal = document.querySelector('.modal');
var model_image = document.querySelector('.modal-image');

modal.addEventListener('click', function() {
  var status = modal.getAttribute('status');
  if(status == 'visible') {
    modal.setAttribute('status','hidden');
  }
});