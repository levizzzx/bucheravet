//CÓDIGO JAVASCRIPT PARA A PÁGINA POLITICA:

/* Código para voltar e avançar nas páginas de acordo com o histórico do navegador */

function voltar() {

    history.go(-1);

};

function avancar() {

    history.go(1);

};

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/politica.css') {
        estilo.setAttribute('href', 'css/politicaEscuro.css');
        logo1.setAttribute('src', "../imagens/logotipodark.png");
        logo2.setAttribute('src', "../imagens/logotipodark.png");
        document.cookie = 'tema=' + 'escuro';
    } else {
        estilo.setAttribute('href', 'css/politica.css');
        logo1.setAttribute('src', "../imagens/logotipo.png");
        logo2.setAttribute('src', "../imagens/logotipo.png");
        document.cookie = 'tema=' + 'claro';
    };
};



/* Código para checar o tema atual e definir o valor do cookie, o "estilo" como o tema da página */

document.addEventListener('DOMContentLoaded', function() {

    function getCookie(name) {

        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));

        return match ? decodeURIComponent(match[1]) : '';
        
    };


    
    valorTema = getCookie('tema');

    if (valorTema === 'escuro') {

        estilo.setAttribute('href', 'css/politicaEscuro.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/politica.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");
        
        logo2.setAttribute('src', "../imagens/logotipo.png");

    };
    
});

//---------------------------------------------------------------------------------------------------------------