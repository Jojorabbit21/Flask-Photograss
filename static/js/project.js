function loadProject(element) {
  var pName = element.innerHTML;
  var pPath = element.getAttribute('href');

  var pTitle = document.querySelector('.project-title');
  pTitle.innerHTML = pName;
}

