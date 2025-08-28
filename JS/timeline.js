const track = document.querySelector('.timeline-track');
const slides = document.querySelectorAll('.timeline-slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let index = 0;

function showSlide() {
  const offset = index * (slides[0].clientWidth + 20); 
  track.style.transform = `translateX(-${offset}px)`;
}

next.addEventListener('click', () => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide();
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide();
});
