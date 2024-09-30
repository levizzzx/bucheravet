//CÓDIGO JAVASCRIPT PARA A PÁGINA PRODUTOS:

/* Código para mostrar produtos relacionados à busca */

const produtos = [

    { name: "Ração 1", description: "Ração legal" },

    { name: "Acessório 1", description: "Acessório legal" },

    { name: "Brinquedo 1", description: "Brinquedo legal" },

    { name: "Petisco 1", description: "Petisco legal" },

    { name: "Shampoo 1", description: "Shampoo legal" },

    { name: "Ração 2", description: "Ração divertida" },

    { name: "Acessório 2", description: "Acessório divertido" },

    { name: "Brinquedo 2", description: "Brinquedo divertido" },

    { name: "Petisco 2", description: "Petisco divertido" },

    { name: "Shampoo 2", description: "Shampoo divertido" }

];

document.getElementById('buscaForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const query = document.getElementById('buscaInput').value.toLowerCase();

    const resultados = produtos.filter(produto => 

        produto.name.toLowerCase().includes(query) ||
        
        produto.description.toLowerCase().includes(query)

    );
    mostrarResultados(resultados);
    
});

function mostrarResultados(resultados) {

    const listaProdutos = document.getElementById('listaProdutos');

    const itensProdutos = listaProdutos.getElementsByClassName('produtos');

    for (var i = 0; i < itensProdutos.length; i++) {

        const nomeProduto = itensProdutos[i].getElementsByTagName('h3')[0].innerText.toLowerCase();

        if (resultados.some(produto => produto.name.toLowerCase() === nomeProduto)) {

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

    function getCookie(name) {

        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));

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

getText("promocoes.txt");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.getElementById("textoPromocoes").innerHTML = myText;
}

//---------------------------------------------------------------------------------------------------------------



/* Código para mover o texto de promoções contínuamente */

document.addEventListener('DOMContentLoaded', function() {
    var promocoes = document.getElementById("textoPromocoes");  

    var posicaoInicial = 100;
    var posicaoFinal = -49;
    var posicaoAtual = posicaoInicial;

    function carrossel() {
        if (posicaoAtual >= posicaoFinal) {
            posicaoAtual = posicaoAtual - 0.1;
        } else {
            posicaoAtual = posicaoInicial;
        }
        promocoes.style.left = posicaoAtual + 'vw';
    }

    setInterval(carrossel, 10);
});