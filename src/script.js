const btn = document.querySelector('#botao');
const menu = document.querySelector('#menu');

// Adcionar um evento
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});