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
    const pesquisa = removerAcentos(document.getElementById('buscaInput').value.toLowerCase());

    const resultados = produtos.filter(produto => 
        removerAcentos(produto.nome.toLowerCase()).includes(pesquisa) ||
        removerAcentos(produto.desc.toLowerCase()).includes(pesquisa)
    );

    mostrarResultados(resultados);
});

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarResultados(resultados) {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    resultados.forEach(produto => {
        const itemProduto = document.createElement('li');
        itemProduto.className = 'produtos';
        itemProduto.innerHTML = `<h3>${produto.nome}</h3><p>${produto.desc}</p>`;
        listaProdutos.appendChild(itemProduto);
    });

    const tituloProdutos = document.getElementById('tituloProdutos');
    if (resultados.length > 0) {
        tituloProdutos.textContent = 'Resultados para "' + document.getElementById('buscaInput').value + '":';
    } else {
        tituloProdutos.textContent = 'Nenhum resultado encontrado';
    }

    const detalhes = document.getElementById('detalhes');
    if (detalhes) {
        detalhes.style.display = 'none';
    }
}

//---------------------------------------------------------------------------------------------------------------



/* Código para ajustar o input de busca ao ser selecionado */

document.getElementById('buscaInput').addEventListener('focus', function() {
    this.setAttribute('data-placeholder', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
});

document.getElementById('buscaInput').addEventListener('blur', function() {
    if (this.value === '') {
        this.setAttribute('placeholder', 'Pesquisar produtos...');
    }
});

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



/* Código para filtrar categorias */

function categorias() {

    var displayCategorias = document.getElementById('categorias').style.display;

    if (displayCategorias === 'block') {

        displayCategorias = 'none';

    } else {

        displayCategorias = 'block';

    }
    document.getElementById('categorias').style.display = displayCategorias;



    document.getElementById('filtroBusca').classList.toggle('corFiltro2');

    document.getElementById('filtroBusca').classList.toggle('fa-xmark');
    document.getElementById('filtroBusca').classList.toggle('fa-list');
}


//---------------------------------------------------------------------------------------------------------------



/* Código para criar o gráfico de produtos */

const xArray = ["Ração 1","Acessório 1","Brinquedo 1","Petisco 1","Shampoo 1","Ração 2","Acessório 2","Brinquedo 2","Petisco 2","Shampoo 2"];
const yArray = [340, 270, 150, 220, 180, 410, 290, 190, 240, 210];

const data = [{
  labels: xArray,
  values: yArray,
  type: "pie"
}];

const layout = {title:"Produtos Mais Vendidos (2024)"};

Plotly.newPlot("grafico", data, layout);

//---------------------------------------------------------------------------------------------------------------



/* Código para mostrar e esconder o gráfico de produtos */

function mostrarGrafico(event) {
    event.stopPropagation();
    var grafico = document.getElementById('grafico');
    if (grafico.style.opacity === '1') {
        grafico.style.opacity = '0';
        setTimeout(() => { grafico.classList.remove('mostrar'); }, 500);
    } else {
        grafico.classList.add('mostrar');
        setTimeout(() => { grafico.style.opacity = '1'; }, 10);
    }
}

document.addEventListener('click', function(event) {
    var grafico = document.getElementById('grafico');
    if (!grafico.contains(event.target)) {
        grafico.style.opacity = '0';
        setTimeout(() => { grafico.classList.remove('mostrar'); }, 500);
    }
});

//---------------------------------------------------------------------------------------------------------------