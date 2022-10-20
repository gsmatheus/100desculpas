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

/* modal 1 */
function iniciModal(modalID) {
  const modal = document.getElementById(modalID);
  if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar')
      }
    });
  }
};

function iniciModal2(modalID2) {
  const modal = document.getElementById(modalID2);
  if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalID2 || e.target.className == 'fechar') {
        modal.classList.remove('mostrar')
      }
    });
  }
}

const abriModal = document.querySelector('.abrirModal');
const abriModal2 = document.querySelector('.abrirModal2');
abriModal.addEventListener('click', () => iniciModal('modal-ajuda'));
abriModal2.addEventListener('click', () => iniciModal('modal-ajuda-2'));



