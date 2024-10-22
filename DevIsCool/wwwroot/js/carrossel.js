// carrossel.js
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carrossel = document.querySelector('.carrossel');

prevBtn.addEventListener('click', () => {
    carrossel.scrollBy({
        left: -300, // Valor de deslocamento para a esquerda
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carrossel.scrollBy({
        left: 300, // Valor de deslocamento para a direita
        behavior: 'smooth'
    });
});
