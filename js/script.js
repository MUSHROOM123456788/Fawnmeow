// --- Navigate to Emo page ---
document.getElementById('seal-btn').addEventListener('click', () => {
    window.location.href = 'emo.html';
});

// --- Emoji Array ---
const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🦭','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];

const emojiContainer = document.getElementById('emoji-circle');
const emojis = [];

// --- Create emoji elements ---
emojiList.forEach((emoji, i) => {
    const span = document.createElement('span');
    span.textContent = emoji;
    emojiContainer.appendChild(span);
    emojis.push(span);
});

// --- Animate emojis in a square around all content ---
let t = 0;
function animateEmojis() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 50; // distance from edge

    emojis.forEach((el, i) => {
        const total = emojis.length;
        const phase = (i / total + t/100) % 1; // 0 → 1

        let x=0, y=0;
        if(phase < 0.25){ // top
            const p = phase/0.25;
            x = padding + p*(width-2*padding);
            y = padding;
        } else if(phase < 0.5){ // right
            const p = (phase-0.25)/0.25;
            x = width-padding;
            y = padding + p*(height-2*padding);
        } else if(phase < 0.75){ // bottom
            const p = (phase-0.5)/0.25;
            x = width-padding - p*(width-2*padding);
            y = height-padding;
        } else { // left
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

// Run animation after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    animateEmojis();
});
