document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const mainContent = document.getElementById('main-content');
    const successMessage = document.getElementById('success-message');
    const emojiContainer = document.getElementById('emoji-container');
    const teddyContainer = document.getElementById('teddy-container');

    let yesSize = 1;
    let hearts = [];

    function createHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(heart);
                hearts.push(heart);
                setTimeout(() => {
                    heart.remove();
                    hearts = hearts.filter(h => h !== heart);
                }, 6000);
            }, i * 600);
        }
    }

    createHearts();
    setInterval(createHearts, 6000);

    function moveNoButton() {
        yesSize += 0.2;
        yesBtn.style.transform = `scale(${yesSize})`;

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.max(10, Math.floor(Math.random() * maxX));
        const randomY = Math.max(10, Math.floor(Math.random() * maxY));

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveNoButton();
    });

    yesBtn.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        successMessage.classList.remove('hidden');
        emojiContainer.style.display = 'block';
        teddyContainer.style.display = 'block';

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.classList.add('emoji');
                emoji.innerHTML = ['😍', '❤️', '🥰', '😘', '💖', '💕', '🎉'][Math.floor(Math.random() * 7)];
                emoji.style.left = Math.random() * 100 + 'vw';
                emoji.style.bottom = '0';
                emojiContainer.appendChild(emoji);

                setTimeout(() => {
                    emoji.remove();
                }, 3000);
            }, i * 100);
        }
    });
});
