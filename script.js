function showLoveMessage() {
    const message = `Feliz seu dia, meu amor!! Eu amo ocê demais, és o amor da minha vida, minha vida, meu universo, e tudo que há de melhor!! Você é incrível, engraçado, divertido, inteligente, lindão pra caramba, e várias outras outras coisas aí que se eu fosse falar nem caberia aqui. Na verdade não importa quantas linhas, palavras ou páginas eu use, nada nunca vai conseguir descrever o quão imenso é o meu amor e carinho que tenho para contigo. Você é excepcional, meu bem. Aproveita seu dia. Eu tE amo dEmais!`;
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
