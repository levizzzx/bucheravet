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

//---------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    // Função para salvar dados do formulário no localStorage
    function salvarAgendamento() {
        const agendamento = {
            nomePet: document.getElementById('nomePet').value,
            nomeDono: document.getElementById('nomeDono').value,
            especialidade: document.getElementById('tipo').value,
            medico: document.getElementById('medico').value,
            dataConsulta: document.getElementById('dataConsulta').value,
            horaConsulta: document.getElementById('horaConsulta').value
        };

        // Armazenar os dados no localStorage
        localStorage.setItem('dadosAgendamento', JSON.stringify(agendamento));
        alert("Agendamento salvo com sucesso!");
    }

    // Função para carregar os dados do localStorage e preencher as informações
    function carregarAgendamento() {
        const agendamentoSalvo = localStorage.getItem('dadosAgendamento');
        if (agendamentoSalvo) {
            const agendamento = JSON.parse(agendamentoSalvo);
            const formAgendamento = document.getElementById('consultar')

            formAgendamento.style.display = 'none'
            document.getElementById('consultaSalva').style.display = 'flex';

            document.getElementById('PetNome').innerText = "Nome do Pet: " + agendamento.nomePet;
            document.getElementById('DonoNome').innerText = "Nome do Dono: " + agendamento.nomeDono;
            document.getElementById('MedicoResponsavel').innerText = "Médico: " + agendamento.medico;
            document.getElementById('ConsultaData').innerText = "Data da Consulta: " + agendamento.dataConsulta;
            document.getElementById('ConsultaHora').innerText = "Horário da Consulta: " + agendamento.horaConsulta;
        }
    }

    // Função para excluir dados do localStorage e recarregar a página
    function excluirAgendamento() {
        localStorage.removeItem('dadosAgendamento'); // Remover os dados salvos
        alert("Agendamento excluído com sucesso!");
        location.reload(); // Recarrega a página após a exclusão
    }

    // Carregar os dados salvos quando a página for carregada
    carregarAgendamento();

    // Adicionar o evento de submit ao formulário para salvar os dados
    document.getElementById('consultar').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o envio real do formulário
        salvarAgendamento();
    });

    // Adicionar evento ao botão "Excluir Agendamento"
    document.getElementById('excluirAgendamento').addEventListener('click', function() {
        excluirAgendamento(); // Chama a função de exclusão quando o botão é clicado
    });
});

document.getElementById('consultaSalva').style.display = 'none';

