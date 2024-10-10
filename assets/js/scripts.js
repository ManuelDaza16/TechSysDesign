document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validación de Nombres (mínimo 3 caracteres, solo letras y espacios)
        const nameInput = document.getElementById('name');
        const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
        if (!namePattern.test(nameInput.value)) {
            nameInput.classList.add('is-invalid');
            nameInput.nextElementSibling.textContent = 'El nombre debe contener al menos 3 caracteres y solo letras.';
            isValid = false;
        } else {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
        }

        // Validación de Primer Apellido (mínimo 3 caracteres, solo letras y espacios)
        const firstSurnameInput = document.getElementById('firstSurname');
        if (!namePattern.test(firstSurnameInput.value)) {
            firstSurnameInput.classList.add('is-invalid');
            firstSurnameInput.nextElementSibling.textContent = 'El primer apellido debe contener al menos 3 caracteres y solo letras.';
            isValid = false;
        } else {
            firstSurnameInput.classList.remove('is-invalid');
            firstSurnameInput.classList.add('is-valid');
        }

        // Validación de Número de Documento (exactamente 10 dígitos, según cédulas actuales en Colombia)
        const numberDocInput = document.getElementById('numberDoc');
        const numberDocPattern = /^\d{10}$/;
        if (!numberDocPattern.test(numberDocInput.value)) {
            numberDocInput.classList.add('is-invalid');
            numberDocInput.nextElementSibling.textContent = 'El número de documento debe contener exactamente 10 dígitos numéricos.';
            isValid = false;
        } else {
            numberDocInput.classList.remove('is-invalid');
            numberDocInput.classList.add('is-valid');
        }

        // Validación de Correo Electrónico (formato estricto de email)
        const emailInput = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailInput.nextElementSibling.textContent = 'Por favor, ingrese un correo electrónico válido en el formato: nombre@dominio.com.';
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        // Validación de Número de Celular (exactamente 10 dígitos, formato para Colombia)
        const numberCellInput = document.getElementById('numberCell');
        const numberCellPattern = /^\d{10}$/;
        if (!numberCellPattern.test(numberCellInput.value)) {
            numberCellInput.classList.add('is-invalid');
            numberCellInput.nextElementSibling.textContent = 'El número de celular debe contener exactamente 10 dígitos, como en Colombia.';
            isValid = false;
        } else {
            numberCellInput.classList.remove('is-invalid');
            numberCellInput.classList.add('is-valid');
        }

        // Validación de Términos y Condiciones
        const termsInput = document.getElementById('terms');
        if (!termsInput.checked) {
            termsInput.classList.add('is-invalid');
            termsInput.nextElementSibling.textContent = 'Debe aceptar los términos y condiciones para continuar.';
            isValid = false;
        } else {
            termsInput.classList.remove('is-invalid');
            termsInput.classList.add('is-valid');
        }

        // Si el formulario no es válido, evitar el envío
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
});
