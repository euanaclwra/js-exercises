function calcularRaiz() {
    let numero = Number(document.getElementById('inNumero').value);

    if (isNaN(numero) || numero == 0) {
        alert('Por favor, insira um número válido.');
    }

    let raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz)) {
        document.getElementById('outRaiz').textContent = 'A raiz quadrada de ' + numero + ' é ' + raiz
    } else {
        document.getElementById('outRaiz').textContent = numero + ' não possui raiz exata.'
    }
}
btVerRaiz.addEventListener("click", calcularRaiz);