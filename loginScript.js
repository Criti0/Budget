// loginScript.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = form.elements['username'].value;
        const password = form.elements['password'].value;

        if (username === 'Cristi' && password === '123') {
            // Autentificare corectă, redirecționează către index.html
            window.location.href = 'index.html';
        } else {
            // Autentificare incorectă, afișează un mesaj de eroare
            errorMessage.textContent = 'Nume de utilizator sau parolă incorectă!';
        }
    });
});
