function previsaoChinchilas(qtChinchilas, qtAnos, resposta) {
    qtChinchilas = Number(document.getElementById('inChinchilas').value);
    qtAnos = Number(document.getElementById('inAnos').value);

    if (isNaN(qtAnos, qtChinchilas) || (qtAnos && qtChinchilas == 0)) {
    alert('Por favor, insira um número válido.');
    return;
    } else if (qtChinchilas < 2) {
        alert('O número mínimo de chinchilas é 2.');
        return;
    }
    
    resposta = '';
    
    for (let i = 1; i <= qtAnos; i++) { 
        resposta = resposta + i + 'º ano: ' + qtChinchilas + ' chinchilas\n'
        qtChinchilas = qtChinchilas * 3;
    }

    document.getElementById('outPrevisao').textContent = resposta;
}   
btMostrar.addEventListener('click', previsaoChinchilas);
