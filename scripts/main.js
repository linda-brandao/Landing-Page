var menu = document.getElementById('ul');
var menuBar = document.getElementById('btn-hamburguer');
var iconeMenu = document.getElementById('icone-btn-hamburguer');
let isOpen = false;

menuBar.addEventListener('click', function(){
    if(iconeMenu.getAttribute("src") == "/imagens/menu.png"){
        iconeMenu.setAttribute("src", "/imagens/close.png");
        isOpen = true;
    }else{
        iconeMenu.setAttribute("src", "/imagens/menu.png");
        isOpen = false;
    }

    menu.classList.toggle('active');
});