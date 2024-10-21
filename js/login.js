//CÓDIGO JAVASCRIPT PARA A PÁGINA DE LOGIN:

//PARTE LOGIN:



/* Código para mudar de Login para Cadastro: */

const linkIrCadastro = document.getElementById('link-irCadastro');

linkIrCadastro.addEventListener('click', function(event){

    event.preventDefault();

    setTimeout (function () {

        const fundo = document.getElementById('fundo');
        fundo.classList.add('girar');

    }, 300);


                
    setTimeout (function () {

        const login = document.getElementById('login');
        const mensagemLogin = document.getElementById('mensagemLogin');

        login.classList.add('sumir');
        mensagemLogin.classList.add('sumirmsg');

    }, 100);
                
    setTimeout (function () {
        
        const areaCadastro = document.getElementById('areaCadastro');
        const mensagemCadastro = document.getElementById('mensagemCadastro');

        areaCadastro.classList.remove('sumir');
        mensagemCadastro.classList.remove('sumir');

    }, 1500);
});

//---------------------------------------------------------------------------------------------------------------



/* Código para mudar o texto digitado em "email" de Login para minúsculo */

function lowerCaseLogin() {
    
    const emailLogin = document.getElementById("emailLogin");
    emailLogin.value = emailLogin.value.toLowerCase();
    
};

//---------------------------------------------------------------------------------------------------------------



/* Código para subir os label's de "email" e "senha" de Login */

const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');

const labelEmailLogin = document.getElementById('label-emailLogin');
const labelSenhaLogin = document.getElementById('label-senhaLogin');



function addSenhaLogin() {
                
    labelSenhaLogin.classList.add('up');

};
senhaLogin.addEventListener('focus', addSenhaLogin);

function removeSenhaLogin(){

    labelSenhaLogin.classList.remove('up');

};
senhaLogin.addEventListener('blur', removeSenhaLogin);



function addEmailLogin() {

    labelEmailLogin.classList.add('up');

};
emailLogin.addEventListener('focus', addEmailLogin);
            
function removeEmailLogin() {

    labelEmailLogin.classList.remove('up');

};
emailLogin.addEventListener('blur', removeEmailLogin);



/* Código para manter os label's de "email" e "senha" acima se houver algum texto em um input de Login */

function onInputSenhaLogin() {

    const valorSenhaLogin = senhaLogin.value;

    if (valorSenhaLogin !== "") {

        senhaLogin.removeEventListener('blur', removeSenhaLogin);

    } else {

        senhaLogin.addEventListener('blur', removeSenhaLogin);

    };
};
            
function onInputEmailLogin() {

    const valorEmailLogin= emailLogin.value

    if (valorEmailLogin.trim() !== "") {

        emailLogin.removeEventListener('blur', removeEmailLogin);

    } else {

        emailLogin.addEventListener('blur', removeEmailLogin);

    };
};

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar a "senha" de Login entre visível e não visível */

document.addEventListener('DOMContentLoaded', function() {

    var olhoLogin = document.getElementById('simbolo-senhaLogin');
    
    var tipoLogin = document.getElementById('senhaLogin').getAttribute('type');



    olhoLogin.addEventListener('click', function () {

        olhoLogin.classList.toggle('fa-regular');

        olhoLogin.classList.toggle('fa-eye');

        olhoLogin.classList.toggle('fa-solid');

        olhoLogin.classList.toggle('fa-eye-slash');



        if (tipoLogin === 'password') {

            tipoLogin = 'text';

        } else {

            tipoLogin = 'password';

        };

        document.getElementById('senhaLogin').setAttribute('type', tipoLogin);

    });
});

//---------------------------------------------------------------------------------------------------------------



/* Código para remover espaços da "senha" de Login */

function espacoSenhaLogin() {

    const senhaLogin = document.getElementById("senhaLogin");
    senhaLogin.value = senhaLogin.value.replace(/[^a-zA-Z0-9!@#$%¨&*?+<>\-]/g, '');
        
};

//---------------------------------------------------------------------------------------------------------------



/* Código para checar se os input's de "email" e "senha" de Login estão preenchidos após os Cookies serem definidos */

document.addEventListener('DOMContentLoaded', function() {

    function checarEmailLogin() {

        var valorEmailLogin = emailLogin.value;

        var labelEmailLogin = document.getElementById('label-emailLogin');

        if (valorEmailLogin !== '') {

            labelEmailLogin.classList.add('up');

        };
    };
    setInterval(checarEmailLogin, 1);



    function checarSenhaLogin() {

        var valorSenhaLogin = senhaLogin.value;

        var labelSenhaLogin = document.getElementById('label-senhaLogin');

        if (valorSenhaLogin !== '') {

            labelSenhaLogin.classList.add('up');

        };
    };
    setInterval(checarSenhaLogin, 1);
});

//---------------------------------------------------------------------------------------------------------------

//PARTE CADASTRO:



/* Código para mudar de Cadastro para Login: */

const linkIrLogin = document.getElementById('link-irLogin');

linkIrLogin.addEventListener('click', function(event){

    event.preventDefault();
                
    setTimeout (function () {

        const fundo = document.getElementById('fundo');
        fundo.classList.remove('girar');

    }, 300);


                
    setTimeout (function () {

        const login = document.getElementById('login');
        const mensagemLogin = document.getElementById('mensagemLogin');

        login.classList.remove('sumir');
        mensagemLogin.classList.remove('sumirmsg');

    }, 1500);
    
    setTimeout (function () {

        const areaCadastro = document.getElementById('areaCadastro');
        const mensagemCadastro = document.getElementById('mensagemCadastro');

        areaCadastro.classList.add('sumir');
        mensagemCadastro.classList.add('sumir');

    }, 100);
});

//---------------------------------------------------------------------------------------------------------------



/* Código para mudar o texto digitado em "email" de Cadastro para minúsculo */

function lowerCaseCadastro() {
    
    const emailCadastro = document.getElementById("emailCadastro");
    emailCadastro.value = emailCadastro.value.toLowerCase();
    
};

//---------------------------------------------------------------------------------------------------------------



/* Código para subir os label's de "email" e "senha" de Cadastro */

const nomeCadastro = document.getElementById('nomeCadastro');
const emailCadastro = document.getElementById('emailCadastro')
const senhaCadastro = document.getElementById('senhaCadastro');

const labelNomeCadastro = document.getElementById('label-nomeCadastro');
const labelEmailCadastro = document.getElementById('label-emailCadastro');
const labelSenhaCadastro = document.getElementById('label-senhaCadastro');



function addNomeCadastro() {

    labelNomeCadastro.classList.add('sub');

};
nomeCadastro.addEventListener('focus', addNomeCadastro);

function removeNomeCadastro() {

    labelNomeCadastro.classList.remove('sub');

};
nomeCadastro.addEventListener('blur', removeNomeCadastro);



function addEmailCadastro() {

    labelEmailCadastro.classList.add('sub');

};
emailCadastro.addEventListener('focus', addEmailCadastro);

function removeEmailCadastro() {

    labelEmailCadastro.classList.remove('sub');

};
emailCadastro.addEventListener('blur', removeEmailCadastro);



function addSenhaCadastro() {

    labelSenhaCadastro.classList.add('sub');

};
senhaCadastro.addEventListener('focus', addSenhaCadastro);

function removeSenhaCadastro(){

    labelSenhaCadastro.classList.remove('sub');

};
senhaCadastro.addEventListener('blur', removeSenhaCadastro);



/* Código para manter os label's de "email" e "senha" acima se houver algum texto em um input de Cadastro */

function onInputNomeCadastro() {

    const valorNomeCadastro = nomeCadastro.value;

    if (valorNomeCadastro.trim() !== "") {

        nomeCadastro.removeEventListener('blur', removeNomeCadastro);

    } else {

        nomeCadastro.addEventListener('blur', removeNomeCadastro);

    };
};

function onInputEmailCadastro() {

    const valorEmailCadastro = emailCadastro.value;

    if (valorEmailCadastro.trim() !== "") {

        emailCadastro.removeEventListener('blur', removeEmailCadastro);

    } else {

        emailCadastro.addEventListener('blur', removeEmailCadastro);

    };
};

function onInputSenhaCadastro() {

    const valorSenhaCadastro = senhaCadastro.value;

    if (valorSenhaCadastro !== "") {

        senhaCadastro.removeEventListener('blur', removeSenhaCadastro);

    } else {

        senhaCadastro.addEventListener('blur', removeSenhaCadastro);

    };
};

//---------------------------------------------------------------------------------------------------------------



/* Código para checar se os valores de "data" foram preenchidos e se a senha contém os caractéres
necessários ao enviar o formulário em Cadastro */

document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('cadastrar');

    form.addEventListener('submit', function(event) {

        var dia = form.querySelector('select[id="dia"]');
        var mes = form.querySelector('select[id="mes"]');
        var ano = form.querySelector('select[id="ano"]');
        var valid = true;

        if (dia.value < 1) {
            dia.classList.add('incorreto');
            valid = false;
        } else {
            dia.classList.remove('incorreto');
        }

        if (mes.value < 1) {
            mes.classList.add('incorreto');
            valid = false;
        } else {
            mes.classList.remove('incorreto');
        }

        if (ano.value < 1) {
            ano.classList.add('incorreto');
            valid = false;
        } else {
            ano.classList.remove('incorreto');
        }

        if (!valid) {
            event.preventDefault();
            document.getElementById('avisoCadastro').innerHTML = "Insira uma data válida, por favor";
        } else {
            minimoSenha(event);
        }
    });
});

function minimoSenha(event) {

    var senha = document.getElementById("senhaCadastro").value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%¨&*?+-]).{8,}$/;

    var test = regex.test(senha);



    if (!test) {

        event.preventDefault();

        document.getElementById('avisoCadastro').innerHTML="A senha deve conter deve conter no mínimo 8 caracteres contendo uma letra minúscula, uma letra maiúscula, um número e um caractere especial.";
    
    } else {

        document.getElementById('avisoCadastro').innerHTML="";

        document.cookie = 'anoUsuario=' + encodeURIComponent(document.querySelector('select[id="ano"]').value) + '; path=/';

        document.cookie = 'mesUsuario=' + encodeURIComponent(document.querySelector('select[id="mes"]').value) + '; path=/';

        document.cookie = 'diaUsuario=' + encodeURIComponent(document.querySelector('select[id="dia"]').value) + '; path=/';

        document.cookie = 'senhaUsuario=' + encodeURIComponent(document.querySelector('input[name="senhaCadastro"]').value) + '; path=/';

        document.cookie = 'emailUsuario=' + encodeURIComponent(document.querySelector('input[name="emailCadastro"]').value) + '; path=/';

        document.cookie = 'nomeUsuario=' + encodeURIComponent(document.querySelector('input[name="nomeCadastro"]').value) + '; path=/';

        document.cookie = 'logado=' + encodeURIComponent('true') + '; path=/';

    };
};

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar a "senha" de Cadastro entre visível e não visível */

document.addEventListener('DOMContentLoaded', function() {

    var olhoCadastro = document.getElementById('simbolo-senhaCadastro');
    
    var tipoCadastro = document.getElementById('senhaCadastro').getAttribute('type');



    olhoCadastro.addEventListener('click', function () {

        olhoCadastro.classList.toggle('fa-regular');

        olhoCadastro.classList.toggle('fa-eye');

        olhoCadastro.classList.toggle('fa-solid');

        olhoCadastro.classList.toggle('fa-eye-slash');


        
        if (tipoCadastro === 'password') {

            tipoCadastro = 'text';

        } else {

            tipoCadastro = 'password';

        };

        document.getElementById('senhaCadastro').setAttribute('type', tipoCadastro);

    });
});

//---------------------------------------------------------------------------------------------------------------



/* Código para remover espaços da "senha" de Cadastro */

function espacoSenhaCadastro() {

    const senhaCadastro = document.getElementById("senhaCadastro");
    senhaCadastro.value = senhaCadastro.value.replace(/[^a-zA-Z0-9!@#$%¨&*?+<>\-]/g, '');

};
//---------------------------------------------------------------------------------------------------------------



/* Código para remover caracteres indesejados do "nome" de Cadastro */

function checarNome() {

    const nome = document.getElementById("nomeCadastro");
    nome.value = nome.value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, '');

};

//---------------------------------------------------------------------------------------------------------------



/* Código para checar se os input's de "email" e "senha" de Cadastro estão preenchidos após os Cookies serem definidos */

document.addEventListener('DOMContentLoaded', function() {

    function checarNomeCadastro() {

        var nomeCadastro = document.getElementById('nomeCadastro');
        var valorNomeCadastro = nomeCadastro.value;
        var labelNomeCadastro = document.getElementById('label-nomeCadastro');

        if (valorNomeCadastro !== '') {

            labelNomeCadastro.classList.add('sub');

        };
    };
    setInterval(checarNomeCadastro, 1);



    function checarEmailCadastro() {

        var emailCadastro = document.getElementById('emailCadastro');
        var valorEmailCadastro = emailCadastro.value;
        var labelEmailCadastro = document.getElementById('label-emailCadastro');

        if (valorEmailCadastro !== '') {

            labelEmailCadastro.classList.add('sub');

        };
    };
    setInterval(checarEmailCadastro, 1);



    function checarSenhaCadastro() {

        var valorSenhaCadastro = senhaCadastro.value;

        var labelSenhaCadastro = document.getElementById('label-senhaCadastro');

        if (valorSenhaCadastro !== '') {

            labelSenhaCadastro.classList.add('sub');

        };
    };
    setInterval(checarSenhaCadastro, 1);

});

//---------------------------------------------------------------------------------------------------------------

//PARTE GERAL:



/* Código para definir os valores dos input's com os valores definidos nos Cookies anteriormente */

document.addEventListener('DOMContentLoaded', function() {

    function getCookie(name) {

        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return match ? decodeURIComponent(match[1]) : '';

    };
    
    

    document.querySelector('input[name="emailLogin"]').value = getCookie('emailLogin');
    document.querySelector('input[name="senhaLogin"]').value = getCookie('senhaLogin');

    document.querySelector('input[name="nomeCadastro"]').value = getCookie('nomeCadastro');
    document.querySelector('input[name="emailCadastro"]').value = getCookie('emailCadastro');
    document.querySelector('input[name="senhaCadastro"]').value = getCookie('senhaCadastro');

    document.querySelector('select[name="dia"]').value = getCookie('dia');
    document.querySelector('select[name="mes"]').value = getCookie('mes');
    document.querySelector('select[name="ano"]').value = getCookie('ano');

});

//---------------------------------------------------------------------------------------------------------------



/* Código para voltar e avançar nas páginas de acordo com o histórico do navegador */

function voltar() {

    history.go(-1);

};

function avancar() {

    history.go(1);

};

//---------------------------------------------------------------------------------------------------------------



/* Código para verificar se o "email" digitado em Login corresponde a um "email" cadastrado */

document.addEventListener('DOMContentLoaded', function() {

    function getCookie(name) {

        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return match ? decodeURIComponent(match[1]) : '';

    };



    document.getElementById('entrar').addEventListener('submit', function(event) {

        var valorEmailLogin = emailLogin.value;

        var valorSenhaLogin = senhaLogin.value;

        var emailUsuario = getCookie('emailUsuario');

        var senhaUsuario = getCookie('senhaUsuario');

        if (valorEmailLogin !== emailUsuario) {

            event.preventDefault();
            
            document.getElementById('avisoLogin').innerHTML="O email inserido é inválido";

        } else if (valorSenhaLogin !== senhaUsuario) {

            event.preventDefault();
            
            document.getElementById('avisoLogin').innerHTML="A senha inserida é inválida";

        } else {

            document.cookie = 'logado=' + encodeURIComponent('true') + '; path=/';

        };
    });
});

//---------------------------------------------------------------------------------------------------------------



/* Código para definir os Cookies com os valores digitados em input's ao enviar o formulário em Cadastro */

document.getElementById('cadastrar').addEventListener('submit', function() {
        
    document.cookie = 'nomeCadastro=' + encodeURIComponent(document.querySelector('input[name="nomeCadastro"]').value) + '; path=/login.html';
    document.cookie = 'emailCadastro=' + encodeURIComponent(document.querySelector('input[name="emailCadastro"]').value) + '; path=/login.html';
    document.cookie = 'senhaCadastro=' + encodeURIComponent(document.querySelector('input[name="senhaCadastro"]').value) + '; path=/login.html';

    document.cookie = 'dia=' + encodeURIComponent(document.querySelector('select[name="dia"]').value) + '; path=/login.html';
    document.cookie = 'mes=' + encodeURIComponent(document.querySelector('select[name="mes"]').value) + '; path=/login.html';
    document.cookie = 'ano=' + encodeURIComponent(document.querySelector('select[name="ano"]').value) + '; path=/login.html';

});



/* Código para definir os Cookies com os valores digitados em input's ao enviar o formulário em Login */

document.getElementById('entrar').addEventListener('submit', function() {
        
    document.cookie = 'emailLogin=' + encodeURIComponent(document.querySelector('input[name="emailLogin"]').value) + '; path=/login.html';
    document.cookie = 'senhaLogin=' + encodeURIComponent(document.querySelector('input[name="senhaLogin"]').value) + '; path=/login.html';

});

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/login.css') {

        estilo.setAttribute('href', 'css/loginEscuro.css');

        logo1.setAttribute('src', "/imagens/logotipodark.png");

        document.cookie = 'tema=' + 'escuro';

    } else {

        estilo.setAttribute('href', 'css/login.css');

        logo1.setAttribute('src', "/imagens/logotipo.png");

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

        estilo.setAttribute('href', 'css/loginEscuro.css');

        logo1.setAttribute('src', "/imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/login.css');

        logo1.setAttribute('src', "/imagens/logotipo.png");

    };
    
});

//---------------------------------------------------------------------------------------------------------------



/* Código para fazer o login do Google funcionar */ 

// função para quando o usuário clicar no login com o Google
function EntrarGoogle(googleUser) { 
    // pega informações básicas do usuário que fez login
    const profile = googleUser.getBasicProfile();
    
    // armazena as informações do usuário no localStorage
    localStorage.setItem('userId', profile.getId());
    localStorage.setItem('userName', profile.getName());
    localStorage.setItem('userImage', profile.getImageUrl());
    localStorage.setItem('userEmail', profile.getEmail());
}

// função para quando a janela de login carregar
function onLoad() {
    // carrega a biblioteca do Google "oauth2"
    gapi.load('auth2', () => {
        // ligando o ID que o Google Cloud dá ao login, para aparecer o nome do projeto na janela.
        gapi.auth2.init({
            client_id: '186114144070-8gr5bn1gon6fus9adnmb9h1daji9rbl0.apps.googleusercontent.com',
        });
    });
}

// função para adicionar evento de clique ao botão de login do Google
document.getElementById('google-login').onclick = () => {
    // obtém a configuração de autenticação do Google
    const auth2 = gapi.auth2.getAuthInstance();
    
    // inicia o processo de login
    auth2.signIn().then(googleUser => {
        // chama a função EntrarGoogle com o usuário autenticado
        EntrarGoogle(googleUser);
        
        // redireciona para a página 'index.html' após o login
        window.location.href = 'index.html';
    });
};



//---------------------------------------------------------------------------------------------------------------