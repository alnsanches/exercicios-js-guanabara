let res = document.getElementById('resultado')
let computador = 0
let jogador = 0

function adivinhe() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() //essa função gera um valor real aleatorio entre 0 e 1 
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>.</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>.</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p>Parabéns. Eu tinha sorteado o valor ${computador}.</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}