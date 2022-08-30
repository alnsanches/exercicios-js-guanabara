function contar() {
    let res = document.getElementById('resultado')

    let contar = 1
    while(contar <= 10) {
        res.innerHTML += `${contar} &#x1F449;`
        contar ++
    }
    res.innerHTML += ` &#x1F3C1;`
}