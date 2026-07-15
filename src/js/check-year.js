const input = document.getElementById("birthYear");
const button = document.getElementById("checkYearBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const value = input.value.trim();

    result.className = "section-block__result show";

    if (value === "") {
        result.textContent = "Введіть рік народження!";
        result.classList.add("error");
        return;
    }

    // Якщо введено щось, крім цифр
    if (!/^\d+$/.test(value)) {
        result.textContent = "Тут допоможуть лише вищі сили)";
        result.classList.add("error");
        return;
    }

    const year = Number(value);

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.textContent = "Ви народилися у високосний рік!";
        result.classList.add("success");
    } else {
        result.textContent = "Ви народилися не у високосний рік!";
        result.classList.add("error");
    }
});