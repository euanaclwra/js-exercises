function calcularMedia() {
    let nome = document.getElementById('inNome').value;
    let nota1 = Number(document.getElementById('inNota1').value);
    let nota2 = Number(document.getElementById('inNota2').value);
    let media = (nota1 + nota2) / 2;
    document.getElementById('outMedia').textContent = 'Sua média final é ' + media;

    if (media >= 7) {
        document.getElementById('outSituacao').textContent = 'Parabéns, ' + nome + '! Você foi aprovado!';
        outSituacao.style.color = "blue";
    } else {
        document.getElementById('outSituacao').textContent = nome + ', Você foi reprovado.';
        outSituacao.style.color = "red";
    }
}
btVerMedia.addEventListener("click", calcularMedia);