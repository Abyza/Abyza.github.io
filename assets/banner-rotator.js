const bannerImages = [
  'images/banner_1.jpg',
  'images/banner_2.jpg',
  'images/banner_3.jpg'
];

let currentBannerIndex = 0;
const bannerElement = document.getElementById('rotating-banner');

if (bannerElement) {
  // Preload images to avoid flickers
  bannerImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  setInterval(() => {
    // Fade out
    bannerElement.style.opacity = '0';

    setTimeout(() => {
      currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
      bannerElement.src = bannerImages[currentBannerIndex];
      // Fade back in
      bannerElement.style.opacity = '1';
    }, 1000);
  }, 5000);
}