const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
});

const headerLogoContainer = document.querySelector('.header__logo-container');

headerLogoContainer.addEventListener('click', (e) => {
  e.preventDefault(); // Bağlantının varsayılan davranışını engelle

  // Sayfanın en üstüne yavaşça kaydırma işlemi
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
});
