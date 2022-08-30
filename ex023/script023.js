function contar() {
    let res = document.getElementById('resultado')

    let contar = 2
    while(contar <= 10) {
        res.innerHTML += ` ${contar} &#x1F449;`
        contar += 2
    }
    res.innerHTML += ` &#x1F3C1;`
}