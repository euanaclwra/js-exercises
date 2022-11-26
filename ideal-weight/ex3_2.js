function calcularPeso() {
    //Obtendo o conteúdo dos inputs
    let nome = document.getElementById('inNome').value;
    let altura = Number(document.getElementById('inAltura').value);
    let sexoFem = document.getElementById('rbFeminino').checked;
    let sexoMasc = document.getElementById('rbMasculino').checked;

    //Verificando se nome e sexo foram informados
    if (nome == '' || (sexoFem == false && sexoMasc == false)) {
        alert('Por favor, informe seu nome e/ou sexo.');
    }

    //Verificando se a altura foi informada
    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a sua altura.');
    }

    //Fórmula para mulheres
    if (sexoFem) {
        var peso = 21 * Math.pow(altura, 2);

    //Fórmula para homens
    } else {
        var peso = 22 * Math.pow(altura, 2); 
    }
    
    //Apresenta a resposta
    document.getElementById('outPeso').textContent = nome + ', seu peso ideal é ' + peso.toFixed(2) + 'kg';
}

function limparCampos() {
    location.reload();
}

//Adiciona um evento ao botão de calcular
btVerPeso.addEventListener("click", calcularPeso);

//Adiciona um evento ao botão de limpar
btLimpar.addEventListener("click", limparCampos);