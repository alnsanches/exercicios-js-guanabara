function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() //essa função gera um valor real aleatorio entre 0 e 1 
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.getElementById('resultado')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>.</p>`
}

    function limpar() {
        let res = document.getElementById('resultado')
        res.innerHTML = null // vai esvaziar a section 
    }