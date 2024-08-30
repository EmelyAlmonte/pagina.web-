document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalImages = document.querySelectorAll('.carousel-inner img').length;
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100; // Desplaza el carrusel para mostrar la imagen correspondiente
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('next').addEventListener('click', function() {
        index = (index + 1) % totalImages; // Avanza al siguiente índice
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', function() {
        index = (index - 1 + totalImages) % totalImages; // Retrocede al índice anterior
        updateCarousel();
    });

    // Opcional: Deslizar automáticamente cada 3 segundos
    setInterval(() => {
        index = (index + 1) % totalImages; // Avanza al siguiente índice
        updateCarousel();
    }, 3000); // Cambia la imagen cada 3 segundos
});



