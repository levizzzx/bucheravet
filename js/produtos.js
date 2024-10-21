//CÓDIGO JAVASCRIPT PARA A PÁGINA PRODUTOS:

/* Código para mostrar produtos relacionados à busca */

const produtos = [

    { nome: "Ração 1", desc: "Ração legal" },

    { nome: "Acessório 1", desc: "Acessório legal" },

    { nome: "Brinquedo 1", desc: "Brinquedo legal" },

    { nome: "Petisco 1", desc: "Petisco legal" },

    { nome: "Shampoo 1", desc: "Shampoo legal" },

    { nome: "Ração 2", desc: "Ração divertida" },

    { nome: "Acessório 2", desc: "Acessório divertido" },

    { nome: "Brinquedo 2", desc: "Brinquedo divertido" },

    { nome: "Petisco 2", desc: "Petisco divertido" },

    { nome: "Shampoo 2", desc: "Shampoo divertido" }
];

document.getElementById('buscaForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const pesquisa = document.getElementById('buscaInput').value.toLowerCase();

    const resultados = produtos.filter(produto => 

        removerAcentos(produto.nome.toLowerCase()).includes(pesquisa) ||
        
        removerAcentos(produto.desc.toLowerCase()).includes(pesquisa)
    );

    mostrarResultados(resultados);
});

function removerAcentos(texto) {

    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

};

function mostrarResultados(resultados) {

    const listaProdutos = document.getElementById('listaProdutos');

    const itensProdutos = listaProdutos.getElementsByClassName('produtos');

    for (var i = 0; i < itensProdutos.length; i++) {

        const nomeProduto = removerAcentos(itensProdutos[i].getElementsByTagName('h3')[0].innerText.toLowerCase());

        if (resultados.some(produto => removerAcentos(produto.nome.toLowerCase()) === nomeProduto)) {

            itensProdutos[i].style.display = 'block';

        } else {

            itensProdutos[i].style.display = 'none';

        };
    };
};

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');

    const logo2 = document.getElementById('logo2');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/produtos.css') {

        estilo.setAttribute('href', 'css/produtosEscuro.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

        document.cookie = 'tema=' + 'escuro';

    } else {

        estilo.setAttribute('href', 'css/produtos.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");

        logo2.setAttribute('src', "../imagens/logotipo.png");

        document.cookie = 'tema=' + 'claro';

    };
};

/* Código para checar o tema atual e definir o valor do cookie, o "estilo" como o tema da página */

document.addEventListener('DOMContentLoaded', function() {

    function getCookie(nome) {

        var match = document.cookie.match(new RegExp(nome + '=([^;]+)'));

        return match ? decodeURIComponent(match[1]) : '';
        
    };
    
    valorTema = getCookie('tema');

    if (valorTema === 'escuro') {

        estilo.setAttribute('href', 'css/produtosEscuro.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/produtos.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");
        
        logo2.setAttribute('src', "../imagens/logotipo.png");

    };   
});

//---------------------------------------------------------------------------------------------------------------



/* Código para buscar o arquivo "promocoes.txt" e mostrar as promoções ativas a partir dele */

getText("promo1.txt");

async function getText(file) {

    let myObject = await fetch(file);

    let myText = await myObject.text();

    document.getElementById("textoPromo1").innerHTML = myText;

};

getText2("promo2.txt");

async function getText2(file) {

    let myObject = await fetch(file);

    let myText = await myObject.text();

    document.getElementById("textoPromo2").innerHTML = myText;

};

//---------------------------------------------------------------------------------------------------------------



/* Código para mover o texto de promoções contínuamente */

document.addEventListener('DOMContentLoaded', function() {

    var carrossel = document.getElementById("carrossel");  

    var posicaoInicial = 100;

    var posicaoFinal = -175;

    var posicaoAtual = posicaoInicial;

    function girarCarrossel() {

        if (posicaoAtual >= posicaoFinal) {

            posicaoAtual = posicaoAtual - 0.1;

        } else {

            posicaoAtual = posicaoInicial;

        };

        carrossel.style.left = posicaoAtual + 'vw';
    };
    setInterval(girarCarrossel, 10);

});

//---------------------------------------------------------------------------------------------------------------