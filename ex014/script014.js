function clicar() {
    let agora = new Date
    let saida = document.getElementById('resultado')
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}