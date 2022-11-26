function calcularPreco() {
    let tempo = document.getElementById('inTempo').value;
    let valor = document.getElementById('inValor').value;
    let calculo = Math.ceil(tempo / 15) * valor;
    document.getElementById('outCalcular').textContent = 'Valor a pagar: R$' + calculo;
}

btCalcular.addEventListener("click", calcularPreco);