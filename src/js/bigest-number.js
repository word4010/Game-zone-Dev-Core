document.addEventListener('DOMContentLoaded', () => {
    console.log("Скрипт успішно завантажено");
    
    const inputs = document.querySelectorAll('.max-number__input');
    const resultText = document.querySelector('.section-block__result');

    console.log("Кількість знайдених інпутів:", inputs.length);
    console.log("Чи знайдено блок результату:", !!resultText);

    if (inputs.length === 0 || !resultText) {
        console.error("Помилка: перевірте, чи класи в HTML збігаються з тими, що в JS!");
        return;
    }

    const updateMax = () => {
        const values = Array.from(inputs)
            .map(input => input.value.trim())
            .filter(val => val !== "" && !isNaN(val))
            .map(Number);

        if (values.length === 3) {
            const max = Math.max(...values);
            resultText.textContent = `РЕЗУЛЬТАТ: ${max}`;
        } else {
            resultText.textContent = 'РЕЗУЛЬТАТ';
        }
    };

    inputs.forEach(input => {
        input.addEventListener('input', updateMax);
    });
});