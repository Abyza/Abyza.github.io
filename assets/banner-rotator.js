const bannerImages = [
  'images/banner_1.jpg',
  'images/banner_2.jpg',
  'images/banner_3.jpg'
];

let currentBannerIndex = 0;
const bannerElement = document.getElementById('rotating-banner');

setInterval(() => {
  bannerElement.style.opacity = 0;

  setTimeout(() => {
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
    bannerElement.src = bannerImages[currentBannerIndex];
    bannerElement.style.opacity = 1;
  }, 1000); // matches the CSS transition
}, 4000);
