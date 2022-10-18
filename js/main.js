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


window.addEventListener('scroll', function(){
  var menu = document.querySelector('.header-menu');
  menu.classList.toggle('sticky', window.scrollY > 0);
})

window.addEventListener('scroll', function(){
  const MudarLogo = this.document.querySelector('.logo');
  MudarLogo.classList.toggle('logo-r', window.scrollY > 0);
})

