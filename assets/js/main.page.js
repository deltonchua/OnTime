// DARKMODE
window.name == 'darkmode-on' ? document.querySelector('body').classList.add('darkmode') : document.querySelector('body').classList.remove('darkmode');
document.querySelector('.darkmode-btn').addEventListener('click', function() {
  window.name == 'darkmode-on' ? window.name = 'darkmode-off' : window.name = 'darkmode-on';
  document.querySelector('body').classList.toggle('darkmode');
});
// OVERLAY MENU
document.querySelector('.overlay-menu-btn').addEventListener('click', () => document.querySelector('.overlay').style.height = '100vh');
document.querySelector('.dropdown-overlay-menu-1').addEventListener('click', () => document.querySelector('.dropdown-1').classList.toggle('overlay-dropdown-show'));
document.querySelector('.dropdown-overlay-menu-2').addEventListener('click', () => document.querySelector('.dropdown-2').classList.toggle('overlay-dropdown-show'));
const closeOverlayList = document.querySelectorAll('.close-overlay-menu');
closeOverlayList.forEach(function(overlayItem) {
  overlayItem.addEventListener('click', () => document.querySelector('.overlay').style.height = '0');
});
// QR OVERLAY
document.querySelector('.donate-btc').addEventListener('click', function() {
  document.querySelector('.qr-overlay').style.height = '100vh';
  document.querySelector('.donate-qr-title').textContent = 'BTC';
  document.querySelector('.donate-qr-image').src = '../assets/images/BTC-qr.png';
  document.querySelector('.donate-qr-address').textContent = 'bc1qjv3r9lppjjpjp7n68yr3qjexp7wzz85h9a9heu';
});
document.querySelector('.donate-eth').addEventListener('click', function() {
  document.querySelector('.qr-overlay').style.height = '100vh';
  document.querySelector('.donate-qr-title').textContent = 'ETH / OTO / ITO';
  document.querySelector('.donate-qr-image').src = '../assets/images/ETH-qr.png';
  document.querySelector('.donate-qr-address').textContent = '0x0AeB46e87f064a548Dfd1aC7e5c92B2b983648ED';
});
document.querySelector('.donate-xrp').addEventListener('click', function() {
  document.querySelector('.qr-overlay').style.height = '100vh';
  document.querySelector('.donate-qr-title').textContent = 'XRP';
  document.querySelector('.donate-qr-image').src = '../assets/images/XRP-qr.png';
  document.querySelector('.donate-qr-address').textContent = 'rQHjThBpdqA8yQwzfGRVffKubZ59M9tjHv';
});
document.querySelector('.close-qr').addEventListener('click', () => document.querySelector('.qr-overlay').style.height = '0');
