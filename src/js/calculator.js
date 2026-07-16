const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const resultInput = document.querySelector("#result-input");
const equal = document.querySelector("#equal");
const operators = document.querySelectorAll(".operator");

let currentOperator = "";

operators.forEach(button => {
    button.addEventListener("click", () => {
        currentOperator = button.textContent;
    });
});

equal.addEventListener("click", () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);

    if (number1.value === "" || number2.value === "") {
        resultInput.value = "Введіть числа";
        return;
    }

    let result;

    switch (currentOperator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                resultInput.value = "Ділення на 0";
                return;
            }
            result = num1 / num2;
            break;

        default:
            resultInput.value = "Оберіть операцію";
            return;
    }

    resultInput.value = result;
});