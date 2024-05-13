 // Função para esperar que a página seja carregada antes de executar o código JavaScript
 document.addEventListener("DOMContentLoaded", function() {
  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 1500 // Modificado para 1500ms
    })
    .add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      translateX: [40,0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 2000, // Modificado para 2000ms
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    }).add({
      targets: '.ml11 .line',
      scaleY: [1,0],
      opacity: [1,0.5],
      easing: "easeInExpo",
      duration: 1500, // Modificado para 1500ms
      offset: '-=300'
    }).add({
      targets: '.ml11',
      opacity: 0,
      duration: 2000, // Modificado para 2000ms
      easing: "easeOutExpo",
      delay: 1000
    });
});