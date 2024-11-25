//CÓDIGO JAVASCRIPT PARA A PÁGINA CONSULTA:

/* Código para mudar as opções de médico de acordo com a escolha em "tipo" */

const medicos = {

    1: ['Dr. Caio Yudi Mine Hada'],
    2: ['Dr. Levi Rodrigues'],
    3: ['Dr. Murillo Levis'],
    4: ['Dr. Daniel Evangelista'],
    5: ['Dr. Rafael Burbach']

};

document.getElementById('tipo').addEventListener('change', function() {

    const tipo = this.value;
    const medicoSelect = document.getElementById('medicos').querySelector('select');
    medicoSelect.innerHTML = '<option value="0" selected disabled>Médico Responsável</option>';

    if (medicos[tipo]) {

        medicos[tipo].forEach(medico => {

            medicoSelect.innerHTML += `<option value="${medico}">${medico}</option>` + `<option value="1">Qualquer Médico</option>`;
        
        });
    };
});

//---------------------------------------------------------------------------------------------------------------



/* Código para invalidar a escolha padrão e forçar o usuário a escolher um valor válido */

document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('consultar');
    form.addEventListener('submit', function(event) {
        
        var tipo = form.querySelector('select[id="tipo"]');
        var medico = form.querySelector('select[id="medico"]');
                                    
        if (tipo.value < 1 || medico.value < 1) {

            event.preventDefault();

            if (tipo.value < 1) {

                tipo.classList.add('incorreto')

            } else {

                tipo.classList.remove('incorreto')

            };
                                        
            if (medico.value < 1) {

                medico.classList.add('incorreto');

            } else {

                medico.classList.remove('incorreto')

            };
        };
        location.reload();
        adicionarConsulta()
    });
});

//---------------------------------------------------------------------------------------------------------------



/* Código para retornar a última página ou avançar para a próxima página com um aviso prévio e confirmação*/

document.getElementById('voltar').addEventListener('click', function(event) {

    alert('Você pode perder os dados da consulta se não tiver agendado ainda!');
    var confirmar = confirm("Deseja realmente sair?");

    if (confirmar === true) {

        alert('Redirecionando...');
        history.go(-1);

    } else {

        event.preventDefault();

    };
});

document.getElementById('avancar').addEventListener('click', function(event) {

    alert('Você pode perder os dados da consulta se não tiver agendado ainda!');
    var confirmar = confirm("Deseja realmente sair?");

    if (confirmar === true) {

        alert('Redirecionando...');
        history.go(1);

    } else {
        
        event.preventDefault();

    };
});

//---------------------------------------------------------------------------------------------------------------



/* Código para alterar o tema */

function trocarTema() {

    tema.classList.toggle('fa-rotate-180');

    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');

    var arquivo = estilo.getAttribute('href');

    if (arquivo === 'css/consulta.css') {
        estilo.setAttribute('href', 'css/consultaEscuro.css');
        logo1.setAttribute('src', "../imagens/logotipodark.png");
        logo2.setAttribute('src', "../imagens/logotipodark.png");
        document.cookie = 'tema=' + 'escuro';
    } else {
        estilo.setAttribute('href', 'css/consulta.css');
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

        estilo.setAttribute('href', 'css/consultaEscuro.css');

        logo1.setAttribute('src', "../imagens/logotipodark.png");

        logo2.setAttribute('src', "../imagens/logotipodark.png");

    } else {

        estilo.setAttribute('href', 'css/consulta.css');

        logo1.setAttribute('src', "../imagens/logotipo.png");
        
        logo2.setAttribute('src', "../imagens/logotipo.png");

    };
    
});

//----------------------------------------------------------------------------------------------------------------
document.getElementById('agendar').addEventListener('click', function() {
    document.getElementById('consultaSalva').style.display = 'block';
    document.getElementsByClassName('consulta').style.display = 'none';
})

document.getElementById('consultaSalva').style.display = 'block';

function marcarmais() {
    document.getElementById('consultaSalva').style.display = 'none';
};

if (!localStorage.getItem('consultas')) {
    localStorage.setItem('consultas', JSON.stringify([]));
    document.getElementById('consultaSalva').style.display = 'none';
}

function adicionarConsulta() {
    const dataConsulta = document.getElementById('dataConsulta').value;
    const pesoPet = parseFloat(document.getElementById('pesoPet').value);
    const nomeMedico = document.getElementById('medico').value;

    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    consultas.push({ data: dataConsulta, peso: pesoPet, medico: nomeMedico });

    consultas.sort((a, b) => new Date(a.data) - new Date(b.data));

    localStorage.setItem('consultas', JSON.stringify(consultas));

    atualizarConsultas();
}

function atualizarConsultas() {
    const consultas = JSON.parse(localStorage.getItem('consultas'));
    const consul = document.getElementById('consultas');
    consul.innerHTML = '';


    consultas.sort((a, b) => new Date(a.data) - new Date(b.data)); 

    consultas.forEach((consulta, index) => {
        const divConsulta = document.createElement('div');
        divConsulta.id = 'consulta';

        const hConsulta = document.createElement('h2');
        hConsulta.innerHTML = `${consulta.data} - ${consulta.medico}`;
        
        const reagendar = document.createElement('p');
        const cancelar = document.createElement('p');
        cancelar.id = 'cancelar';
        reagendar.id = 'reagendar';
        
        const reagendaric = document.createElement('i');
        reagendaric.classList.add('fas', 'fa-calendar', 'icon', 'icon-calendar');
        
        const cancelaric = document.createElement('i');
        cancelaric.classList.add('fas', 'fa-times', 'icon', 'icon-remove');
        cancelaric.innerHTML = '  - cancelar';
        reagendaric.innerHTML = ' - reagendar';

        reagendar.appendChild(reagendaric);
        cancelar.appendChild(cancelaric);
        
        divConsulta.appendChild(hConsulta);
        divConsulta.appendChild(cancelar);
        divConsulta.appendChild(reagendar);

        consul.appendChild(divConsulta);

        cancelar.onclick = function() {
            removerConsulta(index); 
        };
    });
}

function removerConsulta(indice) {
    let consultas = JSON.parse(localStorage.getItem('consultas'));

    consultas.splice(indice, 1);

    localStorage.setItem('consultas', JSON.stringify(consultas));

    atualizarConsultas();
    alert('Consulta removida com sucesso!');
}

atualizarConsultas();

function removerConsulta(indice) {
    let consultas = JSON.parse(localStorage.getItem('consultas'));

    consultas.splice(indice, 1);

    localStorage.setItem('consultas', JSON.stringify(consultas));

    atualizarConsultas();
    alert('Consulta removida com sucesso!');
    location.reload();
}

atualizarConsultas();

let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

consultas.forEach(consulta => {
    console.log(`Data: ${consulta.data}, Peso: ${consulta.peso} kg`);
});