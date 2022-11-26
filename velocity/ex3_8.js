function verificarSituacao() {
    let velPermitida = Number(document.getElementById('inVelPermitida').value);
    let velCondutor = Number(document.getElementById('inVelCondutor').value);

    if (isNaN(velCondutor,velPermitida) || velCondutor, velPermitida == 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    if (velCondutor <= velPermitida) {
        document.getElementById('outSituacao').textContent = 'Sem multa.';
    } else if (velCondutor <= ((0.20 * velPermitida) + velPermitida)) {
        document.getElementById('outSituacao').textContent = 'Multa leve.';
    } else {
        document.getElementById('outSituacao').textContent = 'Multa grave.';
    }
}
btVerificar.addEventListener("click", verificarSituacao);