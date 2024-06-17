document.addEventListener("DOMContentLoaded", function() {
    const songsContainer = document.getElementById('songs');

    function getStars(difficulty) {
        let stars = '';
        for (let i = 0; i < difficulty; i++) {
            stars += '<span>&#9733;</span>';
        }
        return stars;
    }

    
    songsContainer.innerHTML = generateSongsHTML(songs);
});

document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById('login-btn');


    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const themeIcon = themeToggleBtn.querySelector('img');
        const themeText = themeToggleBtn.querySelector('span');
        const profileDark = document.querySelector('.profile-dark');
        const profileLight = document.querySelector('.profile-light');
        const contactIcons = document.querySelectorAll('.contact-icons a');
      
        // Check local storage for theme
        let theme = localStorage.getItem('theme');
      
        if (theme) {
            document.documentElement.classList.add(theme);
            if (theme === 'light-theme') {
                themeText.textContent = 'Dark';
                themeIcon.src = 'Pictures/moon.png';
                profileDark.classList.add('hidden');
                profileLight.classList.remove('hidden');
                contactIcons.forEach(icon => icon.style.color = '#000');
            } else {
                themeText.textContent = 'Light';
                themeIcon.src = 'Pictures/Sun.png';
                profileDark.classList.remove('hidden');
                profileLight.classList.add('hidden');
                contactIcons.forEach(icon => icon.style.color = '#acaaaa');
            }
        }
      
        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('light-theme')) {
                document.documentElement.classList.remove('light-theme');
                document.documentElement.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                themeText.textContent = 'Light';
                themeIcon.src = 'Pictures/Sun.png';
                profileDark.classList.remove('hidden');
                profileLight.classList.add('hidden');
                contactIcons.forEach(icon => icon.style.color = '#acaaaa');
            } else {
                document.documentElement.classList.remove('dark-theme');
                document.documentElement.classList.add('light-theme');
                localStorage.setItem('theme', 'light-theme');
                themeText.textContent = 'Dark';
                themeIcon.src = 'Pictures/Moon.png';
                profileDark.classList.add('hidden');
                profileLight.classList.remove('hidden');
                contactIcons.forEach(icon => icon.style.color = '#000');
            }
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginButton = document.getElementById('login-btn');
    const logoutButton = document.getElementById('logout-btn');
    const usernameDisplay = document.getElementById('username-display');

    function updateNavbarWithUsername() {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'inline';
            usernameDisplay.textContent = storedUsername;
        } else {
            loginButton.style.display = 'inline';
            logoutButton.style.display = 'none';
            usernameDisplay.textContent = '';
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
            updateNavbarWithUsername();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
        });
    }

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('username');
        updateNavbarWithUsername();
    });

    updateNavbarWithUsername();
});
