function calcularTaxa() {
    let bairro = document.getElementById('inBairro').value;
    let taxaEntrega;

    switch (bairro) {
        case 'Centro':
        taxaEntrega = 5.00;
        break;

        case 'Olímpico':
        case 'Santa Paula':
        taxaEntrega = 6.00;
        break;

        case 'Cerâmica':
        taxaEntrega = 7.00;
        break;

        default:
        taxaEntrega = 8.00;
    }

    document.getElementById('outTaxa').textContent = 'A taxa de entrega é R$' + taxaEntrega.toFixed(2);
}

btVerTaxa.addEventListener("click", calcularTaxa);