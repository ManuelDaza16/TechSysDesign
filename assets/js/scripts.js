const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const btnInvesting = document.querySelector('.btn-investing')

// Verificamos el tema almacenado en el navegador
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon'; // Cambia el icono
}

// Función para alternar el modo
themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.className = 'bi bi-moon'; // Cambia al icono de la luna
        btnInvesting.classList.remove('btn-outline-info')
        btnInvesting.classList.add('btn-outline-primary')
    } else {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.className = 'bi bi-sun'; // Cambia al icono de sol
        btnInvesting.classList.remove('btn-outline-primary')
        btnInvesting.classList.add('btn-outline-info')
    }
});
