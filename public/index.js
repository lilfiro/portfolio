// Sayfa yüklendiğinde tarayıcı geçmişine bir girdi ekleyerek URL'de görünen "#fragment" kısmını temizleyebiliriz.
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}

// Bağlantılara tıklandığında fragmenti gizlemek için JavaScript kullanma
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Bağlantının varsayılan davranışını engelle
      const targetId = link.getAttribute('href').slice(1); // "#" işaretini kaldır
      const targetElement = document.getElementById(targetId);

      // Hedef elementi görünür yapın
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Tarayıcı geçmişini güncellemeden önce bekleyin
      setTimeout(() => {
        // Tarayıcı URL'sini güncelleyin
        history.pushState(null, null, `#${targetId}`);
      }, 0);
    });
  }
});

// Header logosuna tıklama olayı
const headerLogo = document.querySelector('.header__logo-link');
headerLogo.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = '#';
  
  // Sayfa yüklendiğinde tarayıcı geçmişine bir girdi ekleyerek URL'de görünen "#fragment" kısmını temizleyebiliriz.
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});
