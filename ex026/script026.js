function contagem() {
    let res = document.getElementById('resultado')
    let nInicial = Number(document.getElementById('valor-inicial').value)
    let nFinal = Number(document.getElementById('valor-final').value)
    let contar

    res.innerHTML += `<h2>Contando de ${nInicial} até ${nFinal} </h2>`
    if (nInicial < nFinal) {
        contar = nInicial
        while (contar <= nFinal) {
            res.innerHTML += ` ${contar} &#x1F449;`
            contar ++
        }
    } else if (nFinal < nInicial) {
        contar = nInicial
        while (contar >= nFinal) {
            res.innerHTML += ` ${contar} &#x1F449;`
            contar --
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais.`
    }
    
    res.innerHTML += ` &#x1F3C1;`
}