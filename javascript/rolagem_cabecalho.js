window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.top = window.scrollY + 'px';
  });