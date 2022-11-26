function verificarParImpar() {
    let numero = Number(document.getElementById('inNumero').value);

    if (isNaN(numero) || numero == 0) {
        alert('Por favor, insira um número válido.');
        return;
    }

    if (numero % 2 == 0) {
        document.getElementById('outResposta').textContent = numero + ' é par.'
    } else {
        document.getElementById('outResposta').textContent = numero + ' é ímpar.'
    }
}
btVerificar.addEventListener("click", verificarParImpar);