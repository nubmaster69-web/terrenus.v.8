function toggleWhatsAppLink() {
    var whatsappLink = document.createElement("a");
    whatsappLink.setAttribute("class", "nav-link");
    whatsappLink.setAttribute("href", "seu_link_do_whatsapp");

    var whatsappIcon = document.createElement("img");
    whatsappIcon.setAttribute("src", "img/icones/whatsapp_5968841.png"); // Altere para o caminho do seu ícone PNG
    whatsappIcon.setAttribute("alt", "WhatsApp");
    whatsappIcon.setAttribute("class", "whatsapp-icon"); // Adicione a classe para aplicar os estilos

    // Adicione o ícone como filho do link
    whatsappLink.appendChild(whatsappIcon);

    var navbarNav = document.getElementById("navbarNav");
    navbarNav.appendChild(whatsappLink);
}