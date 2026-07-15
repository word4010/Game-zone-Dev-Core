import sunIcon from "../img/header/sun-switch.svg";
import moonIcon from "../img/header/moon-switch.svg";

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. КОНТРОЛЬ ТЕМАТИКИ (LIGHT / DARK)
    // ==========================================
    const toggle = document.getElementById("themeToggle");
    const icon = document.querySelector(".theme-toggle__icon");
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
        if (toggle) toggle.classList.add("active");
        if (icon) icon.src = moonIcon;
    } else {
        if (icon) icon.src = sunIcon;
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            if (icon) icon.style.opacity = "0";

            setTimeout(() => {
                if (isDark) {
                    document.documentElement.setAttribute("data-theme", "light");
                    localStorage.setItem("theme", "light");
                    toggle.classList.remove("active");
                    if (icon) icon.src = sunIcon;
                } else {
                    document.documentElement.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark");
                    toggle.classList.add("active");
                    if (icon) icon.src = moonIcon;
                }
                if (icon) icon.style.opacity = "1";
            }, 120);
        });
    }


    // ==========================================
    // 2. ФІЛЬТРАЦІЯ СЕКЦІЙ (ІНТЕРАКТИВ)
    // ==========================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    const sections = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Скасовуємо перехід за посиланням
            
            const filterValue = button.getAttribute('data-filter');

            sections.forEach(section => {
                const sectionCategory = section.getAttribute('data-category');

                if (filterValue === 'all') {
                    section.classList.remove('section-hidden');
                } else if (sectionCategory === filterValue) {
                    section.classList.remove('section-hidden');
                } else {
                    section.classList.add('section-hidden');
                }
            });

            // Закриваємо випадаюче меню (знімаємо фокус)
            button.blur();

            // Плавно скролимо вгору, щоб користувач бачив відфільтрований контент
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });


    // ==========================================
    // 3. МОДАЛЬНЕ ВІКНО ТА ЗБЕРЕЖЕННЯ ІМЕНІ
    // ==========================================
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModal");
    const saveBtn = document.getElementById("saveNameBtn");
    const nameInput = document.getElementById("userNameInput");
    const greetingText = document.querySelector(".user-greeting");

    const updateGreeting = (name) => {
        if (greetingText) {
            greetingText.textContent = `Вітаємо, ${name}!`;
        }
    };

    const closeModalWindow = () => {
        if (modal) modal.classList.remove("welcome-modal--active");
    };

    const saveName = () => {
        if (!nameInput) return;
        const enteredName = nameInput.value.trim();
        const finalName = enteredName || "User";

        localStorage.setItem("userName", finalName);
        updateGreeting(finalName);
        closeModalWindow();
    };


    const savedName = localStorage.getItem("userName");

    if (savedName) {
        updateGreeting(savedName);
    } else {
        setTimeout(() => {
            if (modal) modal.classList.add("welcome-modal--active");
        }, 400);
    }

    if (saveBtn) {
        saveBtn.addEventListener("click", saveName);
    }

    if (nameInput) {
        nameInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                saveName();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModalWindow);
    }

    if (modal) {
        const backdrop = modal.querySelector(".welcome-modal__backdrop");
        if (backdrop) {
            backdrop.addEventListener("click", closeModalWindow);
        }
    }
});