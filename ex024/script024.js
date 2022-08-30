function contar() {
    let res = document.getElementById('resultado')

    let contar = 10
    while(contar >= 1) {
        res.innerHTML += ` ${contar} &#x1F449;`
        contar --
    }
    res.innerHTML += ` &#x1F3C1;`
}