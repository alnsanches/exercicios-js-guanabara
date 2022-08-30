function iniciar() {
    let name = window.prompt('Qual é o seu nome?');
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Olá, <strong>${name}</strong>! É um grande prazer te conhecer! 🖐`
}