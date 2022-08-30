let contador = 0
let res = document.getElementById('resultado');

function contar() {
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}


function zerar() {
    contador = 0
    res.innerHTML = null
}