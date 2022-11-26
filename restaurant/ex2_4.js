function calcularPreco() {
    let precoQuilo = document.getElementById('inPrecoQuilos').value;
    let consumoGramas = document.getElementById('inConsumoGramas').value;
    let preco = (consumoGramas / 1000) * precoQuilo;
    document.getElementById('outPreco').textContent = 'Valor a pagar: R$' + preco;    
}

btCalcular.addEventListener("click", calcularPreco);