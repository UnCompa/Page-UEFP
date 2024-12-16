document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    let slideInterval;

    // Función para cambiar la imagen (mover de un slide a otro)
    function changeSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${100 / slides.length * currentIndex}%)`;
    }

    // Función para mostrar la imagen anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slider.style.transform = `translateX(-${100 / slides.length * currentIndex}%)`;
    }

    // Función para mostrar la imagen siguiente
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${100 / slides.length * currentIndex}%)`;
    }

    // Iniciar el cambio automático cada 3 segundos
    function startSlider() {
        slideInterval = setInterval(changeSlide, 3000);
    }

    // Detener el cambio automático cuando el mouse está sobre el slider
    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Iniciar y detener el slider según el mouse esté sobre él
    document.querySelector('.slider-container').addEventListener('mouseenter', stopSlider);
    document.querySelector('.slider-container').addEventListener('mouseleave', startSlider);

    // Añadir eventos a los botones de navegación
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    // Iniciar el slider cuando la página se carga
    startSlider();
});
