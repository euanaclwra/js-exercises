let carros = [];

function adicionarCarro(modelo, preco) {
    modelo = document.getElementById('inModelo').value;
    preco = document.getElementById('inPreco').value;

    if (modelo == '' || preco == 0 || isNaN(preco)) {
        alert('Por favor, informe os dados corretamente.');
        return;
    }

    carros.push({ modelo: modelo, preco: preco });
    document.getElementById('outLista').textContent = carros;

    listarCarros();
}
btAdicionar.addEventListener('click', adicionarCarro)
