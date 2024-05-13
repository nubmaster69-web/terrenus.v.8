// Função para clonar as opções do menu e inseri-las dentro do elemento toggle-collapse quando ativado em dispositivos móveis
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        var $navbarCollapse = $('.navbar-collapse');
        var $toggleCollapse = $('#toggle-collapse');

        if ($toggleCollapse.length) {
            $toggleCollapse.remove();
        }

        if ($navbarCollapse.hasClass('show')) {
            var $clonedNav = $('.navbar-collapse').clone().attr('id', 'toggle-collapse');
            $clonedNav.removeClass('show').appendTo('body');
            $('body').addClass('show-navbar');
        } else {
            $('body').removeClass('show-navbar');
        }
    });
});