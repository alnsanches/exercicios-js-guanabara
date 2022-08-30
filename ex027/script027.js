function tabuada() {
    let res = document.getElementById('resultado')
    let numero = Number(document.getElementById('num').value)

    res.innerHTML = `<h2>Tabuada do número ${numero}.</h2>`

    let cont = 1
    while (cont <= 10) {
        res.innerHTML += `${numero} x ${cont} = ${numero * cont} <br>`
        cont ++
    }
}