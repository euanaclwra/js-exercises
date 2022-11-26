//Cria variáveis globais
let numContas = 0;
let valTotal = 0;
let resposta = '';

function registrarConta(conta, valor) {
    //Lê o valor dos inputs
    conta = document.getElementById('inConta').value;
    valor = Number(document.getElementById('inValor').value);

    //Verifica se os campos foram preenchidos corretamente
    if (conta == '' || isNaN(valor) || valor == 0) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    resposta = resposta + conta + " - R$" + valor.toFixed(2) + "\n";//Exibe o nome e o valor da conta
    numContas++; //Adiciona uma contagem ao número de contas cada vez que uma nova é registrada
    valTotal =  valTotal + valor; //Adiciona o valor da nova conta registrada no acumulador

    document.getElementById('outContas').textContent = resposta;
    document.getElementById('outQuantidade').textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);   
}
btRegistrar.addEventListener('click', registrarConta);