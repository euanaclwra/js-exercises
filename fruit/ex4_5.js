function repetirFruta(fruta, numero, resposta) {
    fruta = document.getElementById('inFruta').value;
    numero = Number(document.getElementById('inNumero').value);
    resposta = '';

    if (isNaN(numero) || numero == 0 || fruta == '') {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    for (i = 0; i < numero; i++) {
        resposta = resposta + fruta + " * ";
    }

    document.getElementById('outRepetição').textContent = resposta;
}
btRepetir.addEventListener('click', repetirFruta);