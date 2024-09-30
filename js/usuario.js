//CÓDIGO JAVASCRIPT PARA A PÁGINA USUARIO:

/* Código para voltar e avançar nas páginas de acordo com o histórico do navegador */

function voltar() {

    history.go(-1);

};

function avancar() {

    history.go(1);

};

//---------------------------------------------------------------------------------------------------------------



/* Código para mostrar os dados do Usuário */

function getCookie(name) {

    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    return match ? decodeURIComponent(match[1]) : '';

};

var ano = parseInt(getCookie('anoUsuario'));

ano = ano + 1923;

document.getElementById('nome').innerHTML = getCookie('nomeUsuario');

document.getElementById('email').innerHTML = getCookie('emailUsuario');

document.getElementById('senha').innerHTML = getCookie('senhaUsuario');

document.getElementById('data').innerHTML = getCookie('diaUsuario') + ' de ' + getCookie('mesUsuario') + ' de ' + ano;

//---------------------------------------------------------------------------------------------------------------



/* Código para sair da sessão */

function sairSessao() {

    document.cookie = 'logado=' + encodeURIComponent('false') + '; path=/';

    window.location.assign('index.html');

};

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/usuario.css') {
        estilo.setAttribute('href', 'css/usuarioEscuro.css');
        logo1.setAttribute('src', "../imagens/logotipodark.png");
        logo2.setAttribute('src', "../imagens/logotipodark.png");
        document.cookie = 'tema=' + 'escuro';
    } else {
        estilo.setAttribute('href', 'css/usuario.css');
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

        estilo.setAttribute('href', 'css/usuarioEscuro.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/usuario.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");
        
        logo2.setAttribute('src', "../imagens/logotipo.png");

    };
    
});

//---------------------------------------------------------------------------------------------------------------