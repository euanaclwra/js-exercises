function calcularPromocao() {
    let modelo = document.getElementById('inModelo').value;
    let preco = document.getElementById('inPreco').value;
    let entrada = 0.50 * preco;
    let saldo = (preco - entrada) / 12;
    document.getElementById('outPromocao').textContent = 
    modelo + ' por ' + entrada + ' de entrada + 12x de ' + saldo;
}

btPromocao.addEventListener("click", calcularPromocao);