let pacientes = []; //Cria uma variável global contendo um array

function adicionarPaciente(nome, lista) { //Função para adicionar um paciente na lista
    nome = document.getElementById('inPaciente').value; //Lê o valor do input

    if (nome == '') { //Verifica se o campo foi preenchido corretamente
        alert('Por favor, informe o nome do paciente.');
        return;
    }

    pacientes.push(nome); //Adiciona um elemento no fim da lista
    lista = ''; //Cria uma string pra acumular os nomes

    for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }

    document.getElementById('outLista').textContent = lista;

    document.getElementById('inPaciente').value = '';
}
btAdicionar.addEventListener('click', adicionarPaciente)

function adicionarUrgencia(nome, lista) {
    nome = document.getElementById('inPaciente').value;

    if (nome == '') {
        alert('Por favor, informe o nome do paciente.');
        return;
    }

    pacientes.unshift(nome);
    lista = '';

    for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }

    document.getElementById('outLista').textContent = lista;

    document.getElementById('inPaciente').value = '';
}
btUrgencia.addEventListener('click', adicionarUrgencia)

function atenderPaciente(lista, atender) {
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera.');
        return;
    }
    
    atender = pacientes.shift();
    document.getElementById('outAtendimento').textContent = 'Paciente em atendimento: ' + atender;

    lista = '';

    for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }

    document.getElementById('outLista').textContent = lista;

    document.getElementById('inPaciente').value = '';
}
btAtender.addEventListener('click', atenderPaciente)

