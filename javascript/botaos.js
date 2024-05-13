// Não é mais necessário o código relacionado à rolagem
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores da web mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores mais recentes
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // Quando o usuário clica no botão, rola de volta ao topo
  function topFunction() {
    document.body.scrollTop = 0; // Para navegadores da web mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores mais recentes
  }

//botao whatapp
window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
      backToTopButton.classList.add('active');
  } else {
      backToTopButton.classList.remove('active');
  }

  // Show/hide WhatsApp button based on the same scroll position
  var whatsappButton = document.querySelector('.whatsapp-button');
  if (window.scrollY > 100) {
      whatsappButton.classList.add('active');
  } else {
      whatsappButton.classList.remove('active');
  }
});

// Back to Top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




