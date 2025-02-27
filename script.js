/* Formulario com erro */

document
  .getElementById('formUser')
  .addEventListener('submit', function (event) {
    let isValid = true;
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      const errorMessage = input.nextElementSibling;
      if (input.value.trim() === '') {
        input.classList.add('error');
        input.classList.remove('valid');
        errorMessage.style.display = 'block';
        isValid = false;
        alert("Por favor, insira o seu nome!");
      } else {
        input.classList.add('valid');
        input.classList.remove('error');
        errorMessage.style.display = 'none';
        alert("Por favor, insira o seu e-mail");
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });