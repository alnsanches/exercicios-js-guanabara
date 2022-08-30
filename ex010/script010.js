let contador = 0

let res = window.document.getElementById('resultado');

function botao1() {
    res.innerHTML += `<p>Clicou no primeiro botão.</p>`
}

function botao2() {
    res.innerHTML += `<p>Clicou no segundo botão.</p>`
}

function botao3() {
    res.innerHTML += `<p>Clicou no terceiro botão.</p>`
}

function botao4() {
    res.innerHTML += `<p>Clicou no quarto botão.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}