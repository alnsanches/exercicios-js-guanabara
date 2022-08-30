function fatorial() {

    let resposta = document.getElementById('resultado');
    let numero = parseInt(document.getElementById('numero').value);
    let fat = 1
    for (let contador = numero; contador > 1; contador--) {
        fat *= contador
    }
    resposta.innerHTML += `${numero}!= <strong>${fat.toLocaleString('pt-BR')}</strong>`
}