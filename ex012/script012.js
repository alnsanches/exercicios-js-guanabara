
function calcular() {
    let numero = Number(window.prompt('Digite um número: '));
    
    let msg
    if (numero % 2 == 0) {
        msg = 'PAR'
    } else {
        msg = 'ÍMPAR'
    }

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>O número ${numero} escolhido é ${msg}.</p>`
}