document.addEventListener('DOMContentLoaded', function () {
    // Obținem referința către butonul de login
    const loginButton = document.getElementById('login-button');

    // Verificăm dacă există un utilizator autentificat
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // Dacă utilizatorul este autentificat, schimbăm textul butonului la "Cristi"
    if (isAuthenticated) {
        loginButton.textContent = 'Cristi';
    }
});

