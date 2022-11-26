function calcularHora() {
    let horaBrasil = Number(document.getElementById('inHora').value);

    if (horaBrasil == '' || isNaN(horaBrasil)) {
        alert('Informe o horário corretamente.');
    }

    let horaFranca = horaBrasil + 5;

    if (horaFranca >= 24) {
        horaFranca = horaFranca - 24;
    }

    document.getElementById('outHora').textContent = 'Agora são ' + horaFranca.toFixed(2) + ' na França.'
}

btVerHora.addEventListener("click", calcularHora);