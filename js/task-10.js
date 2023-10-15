const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = input.value;
    const boxSize = 30;
    let html = '';

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = boxSize + i * 10;
      const bgColor = getRandomHexColor();

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = bgColor;

      html += box.outerHTML;
    }

    boxesContainer.innerHTML = html;
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }