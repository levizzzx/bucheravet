self.onmessage = (event) => {
    if (event.data === 'iniciar') {
        // Simulando uma resposta
        const vacinas = ['Vacina A', 'Vacina B', 'Vacina C'];
        self.postMessage(vacinas);
    }
};