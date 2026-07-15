const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessNumber");
const result = document.getElementById("resultat");

guessBtn.addEventListener("click", function () {
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    const userNumber = Number(guessInput.value);

    result.classList.remove("success", "error", "warning");

    if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
        result.textContent = "Введіть число від 1 до 10!";
        result.classList.add("warning");
        return;
    }

    if (userNumber === computerNumber) {
        result.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
        result.classList.add("success");
    } else {
        result.textContent = `Ви програли, комп'ютер загадав ${computerNumber}.`;
        result.classList.add("error");
    }
});