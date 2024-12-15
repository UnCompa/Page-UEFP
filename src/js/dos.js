document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    let slideInterval;

    // Función para cambiar la imagen
    function changeSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
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

    // Iniciar el slider cuando la página se carga
    startSlider();
});

