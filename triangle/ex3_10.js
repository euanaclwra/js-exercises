function verificarTriangulo() {
    let ladoA = Number(document.getElementById('inLadoA').value);
    let ladoB = Number(document.getElementById('inLadoB').value);
    let ladoC = Number(document.getElementById('inLadoC').value);

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        document.getElementById('outResposta').textContent = 'Os lados não podem formar um triângulo.';
        return;
    } else {
        document.getElementById('outResposta').textContent = 'Os lados podem formar um triângulo.';
    }

    if (ladoA == ladoB && ladoB == ladoC) {
        document.getElementById('outTipo').textContent = 'Tipo: Equilátero.';
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        document.getElementById('outTipo').textContent = 'Tipo: Escaleno.';
    } else {
        document.getElementById('outTipo').textContent = 'Tipo: Isósceles.';
    }
}
btVerificar.addEventListener("click", verificarTriangulo);