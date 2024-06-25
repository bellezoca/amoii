function showLoveMessage() {
    const message = `OI MEU AMOoOoOoOoOoOoOoOoOor! Eu tE amo dEmais homi do céééééééu!! CASE COMIGOOOOOOOOOOO!`;
    document.getElementById('message').textContent = message;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts-background').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
