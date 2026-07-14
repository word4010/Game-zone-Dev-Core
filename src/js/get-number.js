const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessNumber");
const result = document.getElementById("resultat");

guessBtn.addEventListener("click", function () {
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    const userNumber = Number(guessInput.value);

    if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
        result.textContent = "Введіть число від 1 до 10!";
        return;
    }

    if (userNumber === computerNumber) {
        result.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
    } else {
        result.textContent = `Ви програли, комп'ютер загадав ${computerNumber}.`;
    }
});