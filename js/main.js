const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


/* mini menu */
function openItem(evt, itemName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(itemName).style.display = "block";
  evt.currentTarget.className += " active";
}


 /* scroll */
window.addEventListener('scroll', function(){
  var menu = document.querySelector('.header-menu');
  menu.classList.toggle('sticky', window.scrollY > 0);
})

window.addEventListener('scroll', function(){
  const MudarLogo = this.document.querySelector('.logo');
  MudarLogo.classList.toggle('logo-r', window.scrollY > 0);
})

