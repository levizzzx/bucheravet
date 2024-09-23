//CÓDIGO JAVASCRIPT PARA A PÁGINA PRINCIPAL (INDEX):

/* Código para mudar mudar o plano de fundo de "servicos" */

var banner = document.getElementById('servicos');
var banners = [

    'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/imagens/fundodog.jpg")',
    'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/imagens/fundocat.jpg")'

];  
        
var bannerAtual = 0;

function trocaBanner(){

    bannerAtual++;

    if(bannerAtual == banners.length){

        bannerAtual = 0;

    };

    banner.style.backgroundImage = banners[bannerAtual];

};

document.addEventListener('DOMContentLoaded', trocaBanner());

/* Temporizador da troca de plano de fundo */

let intervalo = setInterval(trocaBanner, 3000);

function parar () {
    
    clearInterval(intervalo);

};

function continuar () {

    intervalo = setInterval(trocaBanner, 3000); 

};

//---------------------------------------------------------------------------------------------------------------



/* Código para mostrar a tela de aniversário do pet ("niver") e confirmar antes de sair sem salvar */

function aparecer() {

    const niver = document.getElementById('niver');

    niver.style.display = 'block';

};



function confirmarsaida() {

    let resposta = confirm("Sua data pode não ter sido salva! Deseja sair?");

    if (resposta === true) {

        niver.style.display = 'none';

    };
};



document.getElementById('sair').addEventListener('click', confirmarsaida);



const formAniversario = document.getElementById('formAniversario');



formAniversario.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const hoje = new Date();

    const dataAniversario = new Date(document.getElementById('dataAniversario').value);

    if (dataAniversario.getDate()+1 === hoje.getDate() && dataAniversario.getMonth() === hoje.getMonth()) {

        alert('Feliz aniversário para seu pet!');

    } else {

        alert('Data de aniversário do seu pet foi salva.');

    };

    document.getElementById('sair').removeEventListener('click', confirmarsaida);
    

    document.getElementById('sair').addEventListener('click', function() {
        niver.style.display = 'none';
    });

    niver.style.display = 'none';
});

//---------------------------------------------------------------------------------------------------------------



/* Código para animar os elementos div de "servico" */

const servico = document.getElementById('servico');
const divs = servico.querySelectorAll('div');

divs.forEach(flutuante => {

    flutuante.addEventListener('mouseover', function() {

        flutuante.classList.add('adc');

    });
});

divs.forEach(flutuante => {

    flutuante.addEventListener('mouseout', function() {

        flutuante.classList.remove('adc');

    });
});

//---------------------------------------------------------------------------------------------------------------



/* Código para verificar se o processo está correndo e guardar as informações em relação ao "popup" em um cookie */

document.addEventListener('DOMContentLoaded', function() {

    function setCookie(name, value, seconds) {

        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        document.cookie = name + "=" + (value) + "; expires=" + date.toUTCString() + "; path=/";

    };

    function acharCookie(name) {

        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;

    };

    if (!acharCookie('msgbemvindo')) {

        window.onload = function() {

            var popup = document.getElementById("popup");
            popup.style.display = "flex";
            popup.style.opacity = "1";

        };

        setCookie('msgbemvindo', 'true', 150);

    };
});

/* Fechar o "popup" */

function fecharPopup() {

    var popup = document.getElementById("popup");
    popup.style.transition = "opacity 1s";
    popup.style.opacity = "0";

    setTimeout(function() {

        popup.style.display = "none";

    }, 1000);
};

//---------------------------------------------------------------------------------------------------------------



/* Código para mostrar e esconder "cookie" */

const cookie = document.getElementById('cookie');
const botao = document.getElementById('ok');

botao.addEventListener ('click',function cookie () {

    const cookie = document.getElementById('cookie');
    cookie.style.opacity = 0;
    cookie.style.pointerEvents = 'none';

});

function surgir() {

    cookie.style.pointerEvents = 'auto';
    cookie.style.opacity = 1;

};

document.addEventListener('DOMContentLoaded', surgir());

//---------------------------------------------------------------------------------------------------------------



/* Código para alternar o plano selecionado em "carrossel" */

const botaoAnterior = document.querySelector('.anterior');
const botaoProximo = document.querySelector('.proximo');
const planos = document.querySelectorAll('aside');
let atualindex = 0;

function atualizar() {

    planos.forEach((plano, index) => {

        plano.classList.add('ativar');

        if (index === atualindex) {

            plano.classList.remove('ativar');

        };
    });
};

botaoAnterior.addEventListener('click', () => {

    atualindex = (atualindex > 0) ? atualindex - 1 : planos.length - 1;
    atualizar();

});

botaoProximo.addEventListener('click', () => {

    atualindex = (atualindex < planos.length - 1) ? atualindex + 1 : 0;
    atualizar();

});

atualizar();

//---------------------------------------------------------------------------------------------------------------



/* Código para mostrar ou esconder "dogBeneficios" quando estiver parcialmente visível */

document.addEventListener('DOMContentLoaded', function() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                document.getElementById('dogBeneficios').classList.remove('fadeOut');

            } else {

                document.getElementById('dogBeneficios').classList.add('fadeOut');

            };
        });
    }, {

        threshold: 0.6

    });

    observer.observe(document.getElementById('dog'));

});

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/index.css') {
        estilo.setAttribute('href', 'css/escuroIndex.css');
        logo1.setAttribute('src', "../imagens/logotipodark.png");
        logo2.setAttribute('src', "../imagens/logotipodark.png");
        document.cookie = 'tema=' + 'escuro';
    } else {
        estilo.setAttribute('href', 'css/index.css');
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

        estilo.setAttribute('href', 'css/escuroIndex.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/index.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");
        
        logo2.setAttribute('src', "../imagens/logotipo.png");

    };
    
});

//---------------------------------------------------------------------------------------------------------------



/* Código para verificar se o usuário está logado e redirecioná-lo para "login" ou "produtos" */

function checarProdutos(name) {

    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    
    if (match) {

        window.location.assign('produtos.html');
        
    } else {

        window.location.assign('login.html');
        
    };
};

/* Código para esconder o "navigator" ao clicar no elemento button */

const popupNavegador = document.getElementById('navigator')
const buttonNavegador = popupNavegador.querySelector('button')

buttonNavegador.addEventListener('click', function() {

    popupNavegador.style.opacity = 0;
    popupNavegador.style.transition = '1s';
    popupNavegador.style.pointerEvents = 'none';

});

/* Código para buscar informações sobre o navegador e sistema operacional do usuário */

document.addEventListener('DOMContentLoaded', function() {

    const navegador = navigator.userAgent;
    const sistemaOperacional = navigator.platform;

    if(navegador.includes('Edg')) {
        document.querySelector('.navegador').innerHTML = 'O navegador em uso é o: Microsoft Edge';
    } else if(navegador.includes('OPR')) {
        document.querySelector('.navegador').innerHTML = 'O navegador em uso é o: Opera';
    } else if(navegador.includes('Chrome')) {
        document.querySelector('.navegador').innerHTML = 'O navegador em uso é o: Google Chrome';
    };

    if(sistemaOperacional.includes('Mac')) {
        document.querySelector('.sistemaOperacional').innerHTML = 'O seu sistema operacional é: Mac';
    } else if(sistemaOperacional.includes('Win32')) {
        document.querySelector('.sistemaOperacional').innerHTML = 'O seu sistema operacional é: Windows';
    } else if(sistemaOperacional.includes('Linux')) {
        document.querySelector('.sistemaOperacional').innerHTML = 'O seu sistema operacional é: Linux';
    };

});

//---------------------------------------------------------------------------------------------------------------



/* Código para verificar se o usuário está logado e redirecioná-lo para "login" ou "consulta" */

function checarConsulta(name) {

    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    
    if (match) {

        window.location.assign('consulta.html');
        
    } else {

        window.location.assign('login.html');
        
    };
};

//---------------------------------------------------------------------------------------------------------------



/* Código para verificar se o usuário está logado */

document.addEventListener('DOMContentLoaded', function() {

    var verificarLogin = document.cookie.match(new RegExp(('logado') + '=([^;]+)'));    

    var login = document.getElementById('login');

    var user = document.getElementById('usuario');

    var consulta = document.getElementById('fazerconsulta');



    if (verificarLogin) {

        login.style.display = 'none';

        user.style.display = 'block';

        consulta.style.right = '17%';

    };

});

function irUsuario() {

    window.location.assign('usuario.html');

};

//---------------------------------------------------------------------------------------------------------------