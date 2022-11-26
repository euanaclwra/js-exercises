function mostrarDuracao() {
    let nome = document.getElementById('inNome').value;
    let duracao = document.getElementById('inMinutos').value;
    duracao = Math.round(duracao / 60) + 'h' + duracao % 60;
    document.getElementById('outResposta').textContent = nome + ' dura ' + duracao;
}

btMostrar.addEventListener("click", mostrarDuracao);