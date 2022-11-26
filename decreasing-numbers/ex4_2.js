function decNumero(numero, resposta) {
    numero = document.getElementById('inNumero').value;
    resposta = typeof(string);
    

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
    } else {        
        for (let i = numero; i > 0; i = i - 1) {
        resposta = resposta + i + ', ';
        }
    }

    document.getElementById('outResposta').textContent = 'Entre 1 e ' + numero + ':\n' + resposta;
}
btDecrescer.addEventListener('click', decNumero);