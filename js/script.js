const images = document.querySelectorAll('.carousel-container img');
let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

// Cambio automatico immagine ogni 4 secondi
setInterval(() => {
  index = (index + 1) % images.length;
  showImage(index);
}, 4000);

