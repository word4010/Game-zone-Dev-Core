document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('number1');
    const num2 = document.getElementById('number2');
    const resultInput = document.getElementById('result-input');
    const operatorBtns = document.querySelectorAll('.operator-btn');
    const equalBtn = document.getElementById('equal');
    
    let selectedOperator = null;

    operatorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            operatorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedOperator = btn.getAttribute('data-op');
        });
    });

    equalBtn.addEventListener('click', () => {
        const val1 = parseFloat(num1.value);
        const val2 = parseFloat(num2.value);

        if (isNaN(val1) || isNaN(val2)) {
            resultInput.value = "Помилка";
            return;
        }

        if (!selectedOperator) {
            resultInput.value = "Оберіть дію";
            return;
        }

        let result = 0;
        switch (selectedOperator) {
            case '+': result = val1 + val2; break;
            case '-': result = val1 - val2; break;
            case '*': result = val1 * val2; break;
            case '/': 
                result = val2 !== 0 ? val1 / val2 : "На 0 не ділиться"; 
                break;
        }

        resultInput.value = result;
    });
});