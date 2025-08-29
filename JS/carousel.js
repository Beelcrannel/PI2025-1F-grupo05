const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const next = carousel.querySelector('.next');
  const prev = carousel.querySelector('.prev');

  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth + 20;
    const offset = index * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  if(next){
    next.addEventListener('click', () => {
      index++;
      if(index >= slides.length) index = 0;
      updateCarousel();
    });
  }

  if(prev){
    prev.addEventListener('click', () => {
      index--;
      if(index < 0) index = slides.length - 1;
      updateCarousel();
    });
  }

  setInterval(() => {
    index++;
    if(index >= slides.length) index = 0;
    updateCarousel();
  }, 3000);

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
