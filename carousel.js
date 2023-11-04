(function() {
    var carousel = document.querySelector('#carouselExampleCaptions');
    var interval = 3000; // Tempo em milisegundos entre as slides
    var currentSlide = 0;
  
    function nextSlide() {
      carousel.querySelector('.carousel-item.active').classList.remove('active');
      carousel.querySelector('.carousel-indicators button.active').classList.remove('active');
  
      currentSlide++;
      if (currentSlide >= carousel.querySelectorAll('.carousel-item').length) {
        currentSlide = 0;
      }
  
      carousel.querySelectorAll('.carousel-item')[currentSlide].classList.add('active');
      carousel.querySelectorAll('.carousel-indicators button')[currentSlide].classList.add('active');
    }
  
    setInterval(nextSlide, interval);
  })();