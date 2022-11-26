function verificarPerfeito (numero, divisores, soma, somaDiv) {
    numero = Number(document.getElementById('inNumero').value);

    if (isNaN(numero) || numero == 0) {
        alert('Por favor, insira um número válido.');
    }

    resposta = '';
    numDivisores = 0;
    divisores = 1;
    soma = 0;
    somaDiv = 1;
    
    for (i = 2; i < numero; i++) {
        
        if (numero % i == 0) {
            soma = soma + Number(i);
            divisores = divisores + ' + ' + i;
        }
    }

    if (soma + somaDiv == numero) {
        document.getElementById('outResposta').textContent = numero + ' é um número perfeito, pois a soma de seus divisores é o seu próprio valor:';
        document.getElementById('outSoma').textContent = divisores + ' = ' + Number(soma + 1);
    } else {
        document.getElementById('outResposta').textContent = numero + ' não é um número perfeito.' + Number(i);
        document.getElementById('outSoma').textContent = divisores + ' = ' + Number(soma);
    }


}
btVerificar.addEventListener('click', verificarPerfeito);