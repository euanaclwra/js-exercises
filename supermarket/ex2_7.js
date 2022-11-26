function calcularPromocao() {
    let produto = document.getElementById('inProduto').value;
    let preco = document.getElementById('inPreco').value;
    preco = (preco * 2) + 0.50 * preco;
    document.getElementById('outPromocao').textContent = 'Promoção ' + produto + ': Leve 3 por ' + preco;
}

btPromocao.addEventListener("click", calcularPromocao);