const romanaAudio = new Audio('Talarurusul numit de.m4a');
const englezaAudio = new Audio('The Talarurus named by E 1.wav');

const playRomana = document.getElementById('play-romana');
const romanaText = document.getElementById('romana-text');
const playEngleza = document.getElementById('play-engleza');
const englezaText = document.getElementById('engleza-text');

playRomana.addEventListener('click', () => {
    if (romanaAudio.paused) {
        romanaAudio.play();
        playRomana.textContent = 'Pause';
    } else {
        romanaAudio.pause();
        playRomana.textContent = 'Play';
    }
});

playEngleza.addEventListener('click', () => {
    if (englezaAudio.paused) {
        englezaAudio.play();
        playEngleza.textContent = 'Pause';
    } else {
        englezaAudio.pause();
        playEngleza.textContent = 'Play';
    }
});