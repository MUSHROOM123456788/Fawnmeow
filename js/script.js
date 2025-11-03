// Navigate to Emo page
document.getElementById('seal-btn').addEventListener('click', () => {
    window.location.href = 'emo.html';
});

// Emojis
const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];
const emojiContainer = document.getElementById('emoji-circle');

const emojis = emojiList.map(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    emojiContainer.appendChild(span);
    return span;
});

// Animate emojis in a square path around all content
let t = 0;
function animateEmojis() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 30;

    emojis.forEach((el, i) => {
        const total = emojis.length;
        const phase = (i / total + t / 200) % 1;
        let x=0, y=0;

        if(phase < 0.25){
            const p = phase / 0.25;
            x = padding + p*(width-2*padding);
            y = padding;
        } else if(phase < 0.5){
            const p = (phase-0.25)/0.25;
            x = width-padding;
            y = padding + p*(height-2*padding);
        } else if(phase < 0.75){
            const p = (phase-0.5)/0.25;
            x = width-padding - p*(width-2*padding);
            y = height-padding;
        } else {
            const p = (phase-0.75)/0.25;
            x = padding;
            y = height-padding - p*(height-2*padding);
        }

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
    });

    t += 1;
    requestAnimationFrame(animateEmojis);
}

document.addEventListener('DOMContentLoaded', () => {
    animateEmojis();
});
