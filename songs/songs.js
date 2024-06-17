document.addEventListener('DOMContentLoaded', () => {
    const profileDark = document.querySelector('.profile-dark');
    const profileLight = document.querySelector('.profile-light');

    // Function to set theme
    function setTheme(theme) {
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateThemeElements(theme);
    }

    // Function to update theme-specific elements
    function updateThemeElements(theme) {
        if (theme === 'light-theme') {
            themeText.textContent = 'Dark';
            profileDark.classList.add('hidden');
            profileLight.classList.remove('hidden');
            contactIcons.forEach(icon => icon.style.color = '#000');
        } else {
            themeText.textContent = 'Light';
            profileDark.classList.remove('hidden');
            profileLight.classList.add('hidden');
            contactIcons.forEach(icon => icon.style.color = '#acaaaa');
        }
    }

    // Check local storage for theme
    let theme = localStorage.getItem('theme') || 'light-theme';
    setTheme(theme);

    // Theme toggle button event listener
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('light-theme')) {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    });
});
