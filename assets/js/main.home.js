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
  document.querySelector('.donate-qr-image').src = '/assets/images/BTC-qr.png';
  document.querySelector('.donate-qr-address').textContent = 'bc1qjv3r9lppjjpjp7n68yr3qjexp7wzz85h9a9heu';
});
document.querySelector('.donate-eth').addEventListener('click', function() {
  document.querySelector('.qr-overlay').style.height = '100vh';
  document.querySelector('.donate-qr-title').textContent = 'ETH / OTO / ITO';
  document.querySelector('.donate-qr-image').src = '/assets/images/ETH-qr.png';
  document.querySelector('.donate-qr-address').textContent = '0x0AeB46e87f064a548Dfd1aC7e5c92B2b983648ED';
});
document.querySelector('.donate-xrp').addEventListener('click', function() {
  document.querySelector('.qr-overlay').style.height = '100vh';
  document.querySelector('.donate-qr-title').textContent = 'XRP';
  document.querySelector('.donate-qr-image').src = '/assets/images/XRP-qr.png';
  document.querySelector('.donate-qr-address').textContent = 'rQHjThBpdqA8yQwzfGRVffKubZ59M9tjHv';
});
document.querySelector('.close-qr').addEventListener('click', () => document.querySelector('.qr-overlay').style.height = '0');

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#4169e1"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4169e1",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}, function() {
  console.log('callback - particles.js config loaded');
});

document.querySelector('#particles-js').style.height = `${document.querySelector('.content').clientHeight-64}px`;
