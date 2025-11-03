// Button navigates to emo page
function goToEmo() {
    window.location.href = 'emo.html';
}

// Debug: check emojis loaded
document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji-circle span');
    console.log(`Loaded ${emojis.length} emojis for animation`);
});
