window.toggleDarkMode = function () {
  document.documentElement.classList.toggle('dark-mode');
};

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');

  let currentIndex = 0;

  function setSlideWidths() {
    const w = carousel.clientWidth;
    slides.forEach(slide => {
      slide.style.width = `${w}px`;
    });
    updateCarousel(false);
  }

  function updateCarousel(animate = true) {
    const w = carousel.clientWidth;
    track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
    track.style.transform = `translateX(-${currentIndex * w}px)`;
  }

  nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', setSlideWidths);

  let timer = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);

  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', () => {
    timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);
  });

  setSlideWidths();
});