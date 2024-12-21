// Script para o Slider de Imagens
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Altera a imagem automaticamente a cada 3 segundos
setInterval(changeSlide, 3000);

// Script para o Flip Clock
function updateCountdown() {
    const targetDate = new Date('2024-06-22T00:00:00'); // Data alvo: 22 de Junho de 2024
    const now = new Date();
    const timeDifference = now - targetDate;  // Alterado para contar desde a data alvo

    if (timeDifference < 0) { // Se a data alvo ainda não passou
        document.querySelectorAll('.digit').forEach(digit => {
            digit.classList.remove('flipped');
        });
        document.querySelector('.countdown').innerHTML = "A data alvo já passou!";
        return;
    }

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    updateFlipClockDigit('years', years);
    updateFlipClockDigit('months', months);
    updateFlipClockDigit('days', days);
}

// Atualiza o flip de cada unidade
function updateFlipClockDigit(digitId, newValue) {
    const digitElement = document.getElementById(digitId);
    const currentValue = digitElement.querySelector('.front').innerText;

    // Se o valor mudou, realiza o flip
    if (currentValue !== String(newValue).padStart(2, '0')) {
        digitElement.classList.add('flipped');
        setTimeout(() => {
            digitElement.querySelector('.front').innerText = String(newValue).padStart(2, '0');
            digitElement.classList.remove('flipped');
        }, 500); // Tempo para o flip
    }
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Inicia o contador na primeira vez
updateCountdown();

