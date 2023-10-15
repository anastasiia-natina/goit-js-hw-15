 const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');

    fontSizeControl.addEventListener('input', function () {
      const fontSize = fontSizeControl.value + 'px';
      textElement.style.fontSize = fontSize;
    });