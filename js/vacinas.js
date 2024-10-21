if (window.Worker) {
    const worker = new Worker('vacinaWorker.js');
    const btn = document.getElementById('carregarVacinas');
    const resultadoDiv = document.getElementById('resultado');

    btn.addEventListener('click', () => {
        resultadoDiv.textContent = "Carregando vacinas...";
        worker.postMessage('iniciar');
    });

    worker.onmessage = (event) => {
        const vacinas = event.data;
        resultadoDiv.innerHTML = `
            <h3>Vacinas disponíveis:</h3>
            <p>${vacinas.join(', ')}</p>
        `;
    };
    worker.onerror = (error) => {
        console.error("Erro no worker:", error);
    };

} else {
    alert("Seu navegador não suporta Web Workers.");
}
