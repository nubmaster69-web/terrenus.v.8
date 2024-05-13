function hideButtons() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      var buttons = document.getElementsByClassName('hide-on-small');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
      }
    }
  }

  // Executar a função assim que a página for carregada
  window.onload = function() {
    hideButtons();
  }

  // Atualizar a visibilidade dos botões quando a janela for redimensionada
  window.addEventListener('resize', function() {
    hideButtons();
  });