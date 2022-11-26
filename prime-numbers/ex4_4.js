function verificarPrimo(numero, resposta) {
    numero = Number(document.getElementById('inNumero').value); //Lê o valor digitado no input
    let numDiv = 0; //Cria o contador de divisores
    resposta = ''; 

    //Verifica se os campos foram preenchidos corretamente
    if (numero == 0 || isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    for (let i = 1; i <= numero; i++) { //Repete o loop enquanto 'i' for menor que o número digitado
        resposta = resposta + numero / i; //Acumula as respostas do numero dividido por 'i'
        
        if (numero % i == 0) { //Se o número for divisível por 'i', adiciona 1 na contagem de divisores
            numDiv = numDiv + 1;
            
            if (numDiv > 2) { //Se o número de divisores for maior que 2, o loop é interrompido
                break;
            } else {
                continue;
            }
        }
    }

    if (numDiv <= 2) { //Se o número só for divisível por 2 números (1 e ele mesmo), ele é primo
        document.getElementById('outResposta').textContent = numero + ' é primo.';
    } else { //Se não, não é primo
        document.getElementById('outResposta').textContent = numero + ' não é primo.';
    }
}
btVerificar.addEventListener('click', verificarPrimo);