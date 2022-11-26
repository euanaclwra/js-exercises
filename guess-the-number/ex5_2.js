// declara um array global que irá conter os números já apostados
var erros = [];

// gera um número aleatório entre 1 e 100
// multiplicamos o math.random por 100 para virar um número de 1 a 100 ao invés de 1 a 0
// usamos o math.floor para tornar o número inteiro
var sorteado = Math.floor(Math.random() * 100) + 1;

// declara uma constante com o número de chances
const chances = 6;
let chancesRestantes;

function apostarNumero(numero) {
    // lê o número digitado
    numero = Number(document.getElementById('inNumero').value);

    // verifica se o número é válido
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    // se o jogador acertar o número
    if (numero == sorteado) {
        alert('Parabéns! Você acertou.');

        // altera o estado dos botões
        document.getElementById('btApostar').disabled = true;
        document.getElementById('btJogar').style.display = 'block';
        document.getElementById('outResposta').textContent = 'Parabéns! O número sorteado era ' + sorteado;
    } else {
        // se o número é repetido
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro...");            
        } else {
            erros.push(numero); // adiciona o número apostado no array
            chancesRestantes = chances - erros.length // calcula o número de chances restantes
            document.getElementById('outResposta').textContent = 'Você errou :( Restam ' + chancesRestantes + " tentativas.";

            if (chancesRestantes == 0) {
                document.getElementById('outResposta').textContent = 'Suas chances terminaram. O número era ' + numero + '.';
                btApostar.disabled = true;
            }
        }
    }
}
btApostar.addEventListener('click', apostarNumero);