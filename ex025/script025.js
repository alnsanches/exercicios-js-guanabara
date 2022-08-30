function contar() {
    let res = document.getElementById('resultado')
    let numero = Number(document.getElementById('fnum').value)
    res.innerHTML += `<h2>Contando de 0 até ${numero}</h2>`

    let contar = 0
    while(contar <= numero) {
        res.innerHTML += ` ${contar} &#x1F449;`
        contar++
    }
    res.innerHTML += ` &#x1F3C1;`
}