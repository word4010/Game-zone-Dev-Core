const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".theme-toggle__icon");

const sunIcon = "./img/header/sun-switch.svg";
const moonIcon = "./img/header/moon-switch.svg";

const savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);

if (savedTheme === "dark") {
    toggle.classList.add("active");
    icon.src = moonIcon;
} else {
    icon.src = sunIcon;
}

toggle.addEventListener("click", () => {

    const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

    icon.style.opacity = "0";

    setTimeout(() => {

        if (isDark) {

            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");

            toggle.classList.remove("active");

            icon.src = sunIcon;

        } else {

            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");

            toggle.classList.add("active");

            icon.src = moonIcon;

        }

        icon.style.opacity = "1";

    }, 120);

});