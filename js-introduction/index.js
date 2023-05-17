const menuIcon = document.querySelector('.navbar-menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});


