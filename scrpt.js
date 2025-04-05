// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carousel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function moveSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    document.querySelector('.carousel-images').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thanks for reaching out!';
    this.reset();
    setTimeout(() => {
        document.getElementById('formMessage').textContent = '';
    }, 3000);
});
