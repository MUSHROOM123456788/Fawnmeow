// Navigate to Emo page
document.getElementById('seal-btn').addEventListener('click', () => {
    window.location.href = 'emo.html';
});

// Emoji array
const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];
const emojiContainer = document.getElementById('emoji-circle');

// Create emoji elements
const emojis = emojiList.map(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    emojiContainer.appendChild(span);
    return span;
});

// Animate emojis around full page content
let t = 0;
function animateEmojis() {
    const width = window.innerWidth;
    const height = document.body.scrollHeight; // full page height
    const padding = 30;

    emojis.forEach((el, i) => {
        const total = emojis.length;
        const phase = (i / total + t / 300) % 1; // spread evenly

        let x=0, y=0;

        if(phase < 0.25){ // top edge
            const p = phase / 0.25;
            x = padding + p*(width-2*padding);
            y = padding;
        } else if(phase < 0.5){ // right edge
            const p = (phase-0.25)/0.25;
            x = width-padding;
            y = padding + p*(height-2*padding);
        } else if(phase < 0.75){ // bottom edge
            const p = (phase-0.5)/0.25;
            x = width-padding - p*(width-2*padding);
            y = height-padding;
        } else { // left edge
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
