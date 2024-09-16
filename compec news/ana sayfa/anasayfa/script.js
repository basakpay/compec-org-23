let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides; // Döngüsel hareket
    const offset = -currentSlide * 100; // Her slide %100 genişliğinde
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Slider'ın otomatik kayması
setInterval(() => {
    nextSlide();
}, 3000); // Her 3 saniyede bir geçiş
