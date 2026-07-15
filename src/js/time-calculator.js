document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('timeInput');
    const button = document.getElementById('calcButton');
    const result = document.getElementById('timeResult');

    button.addEventListener('click', () => {
        const totalSeconds = parseInt(input.value) || 0;

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        result.textContent = `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});