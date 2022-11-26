function mostrarTabuada(numero, resultado) {
    numero = Number(document.getElementById('inNumero').value);
    resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado = resultado + numero + ' x ' + i + ' = ' + numero * i + '\n';
    }

    document.getElementById('outTabuada').textContent = resultado;
}
btMostrar.addEventListener("click", mostrarTabuada);
