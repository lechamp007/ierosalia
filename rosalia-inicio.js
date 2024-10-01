document.addEventListener('scroll', function() {
    const vision = document.querySelector('.vision');
    const mision = document.querySelector('.mision');
  
    // Ajusta el valor según el desplazamiento necesario para activar el efecto
    const scrollThreshold = 20;
  
    if (window.scrollY > scrollThreshold) {
      vision.style.transform = 'translateY(-20%)';
      mision.style.transform = 'translateY(-20%)';
    } else {
      vision.style.transform = 'translateY(0)';
      mision.style.transform = 'translateY(0)';
    }
  });
  document.addEventListener('scroll', function() {
    const menu= document.querySelector('.menu');
    const scrollThreshold = 50;
  
    if (window.scrollY > scrollThreshold) {
        menu.style.backgroundColor = '#4EC9F7'; // Cambia el color al hacer scroll
      } else {
        menu.style.backgroundColor = 'white'; // Restaura la transparencia
      }
    });
    /// Inicio de pagina que se mueva//
    const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalImages = images.length;

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Regresa al principio si llega al final
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Va a la última imagen si está en la primera
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}


