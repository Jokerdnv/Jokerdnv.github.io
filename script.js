document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("language-toggle-btn");
    const langFlag = document.getElementById("language-flag");
    const langElements = document.querySelectorAll("[data-lang-en]");
    let currentLang = "en"; // Default language is English

    // Set the initial flag and text content
    langFlag.className = "flag-icon flag-icon-sk"; // Default is Slovak flag
    langToggleBtn.querySelector("span:last-child").textContent = "sk"; // Button text starts with "sk"

    langToggleBtn.addEventListener("click", () => {
        // Toggle language
        if (currentLang === "en") {
            currentLang = "sk"; // Switch to Slovak
            langFlag.className = "flag-icon flag-icon-us"; // Switch to Slovak flag
            langToggleBtn.querySelector("span:last-child").textContent = "en"; // Change button text to "en"
        } else {
            currentLang = "en"; // Switch to English
            langFlag.className = "flag-icon flag-icon-sk"; // Switch to US flag
            langToggleBtn.querySelector("span:last-child").textContent = "sk"; // Change button text to "sk"
        }

        // Update all text based on the selected language
        langElements.forEach((element) => {
            element.innerHTML = element.getAttribute(`data-lang-${currentLang}`);
        });
    });
});
