document.addEventListener('DOMContentLoaded', () => {
    console.log("Скрипт успішно завантажено");
    
    const inputs = document.querySelectorAll('.max-number__input');
    // Шукаємо саме span для виведення числа
    const resultValue = document.querySelector('.max-number__val');

    console.log("Кількість знайдених інпутів:", inputs.length);
    console.log("Чи знайдено блок результату:", !!resultValue);

    if (inputs.length === 0 || !resultValue) {
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
            resultValue.textContent = max; 
        } else {
            resultValue.textContent = '—'; 
        }
    };

    inputs.forEach(input => {
        input.addEventListener('input', updateMax);
    });
});