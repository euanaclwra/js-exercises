function calcularSaque() {
    let valor = Number(document.getElementById('inValor').value);

    if (isNaN(valor) || valor == 0) {
        alert('Por favor, informa um valor válido para saque.');
    }

    if (valor % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        return;
    }

    let saque100 = Math.floor(valor / 100);
    let saque50 = Math.floor(((valor - (saque100 * 100)) / 50));
    let saque10 = Math.floor(((valor - (saque100 * 100 + saque50 * 50)) / 10));

    /*var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var notasDez = Math.floor(resto / 10);*/

    document.getElementById('out100').textContent = 'Notas de R$100: ' + saque100;
    document.getElementById('out50').textContent = 'Notas de R$50: ' + saque50;
    document.getElementById('out10').textContent = 'Notas de R$10: ' + saque10; 
}
btExibir.addEventListener("click", calcularSaque);