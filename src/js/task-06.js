 const inputElement = document.getElementById('validation-input');
    const validClass = 'valid';
    const invalidClass = 'invalid';

    inputElement.addEventListener('blur', function () {
      const expectedLength = parseInt(inputElement.getAttribute('data-length'));
      const inputValue = inputElement.value;

      if (inputValue.length === expectedLength) {
        inputElement.classList.remove(invalidClass);
        inputElement.classList.add(validClass);
      } else {
        inputElement.classList.remove(validClass);
        inputElement.classList.add(invalidClass);
      }
    });