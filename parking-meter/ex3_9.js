function calcularTempoTroco() {
    let valor = Number(document.getElementById('inValor').value);

    if (valor < 1) {
        alert('Valor insuficiente.');
    }

    if (valor >= 1 && valor < 1.75) {
        document.getElementById('outTempo').textContent = 'Tempo: 30 minutos.';
        let troco = valor - 1;
        document.getElementById('outTroco').textContent = 'Troco: R$' + troco.toFixed(2);

    } else if (valor >= 1.75 && valor < 3) {
        document.getElementById('outTempo').textContent = 'Tempo: 1 hora.';
        troco = valor - 1.75;
        document.getElementById('outTroco').textContent = 'Troco: R$' + troco.toFixed(2);

    } else {
        document.getElementById('outTempo').textContent = 'Tempo: 2 horas.';
        troco = valor - 3;
        document.getElementById('outTroco').textContent = 'Troco: R$' + troco.toFixed(2);
    }
}
btConfirmar.addEventListener("click", calcularTempoTroco);