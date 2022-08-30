function clicar() {
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let semana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let agora = new Date
    let res = document.getElementById('resultado')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours() 
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()
    
    res.innerHTML = `<p><strong>Dia:</strong> ${dia}</p>`
    res.innerHTML += `<p><strong>Mês:</strong>  ${meses[mes]}</p>`
    res.innerHTML += `<p><strong>Ano:</strong>  ${ano}</p>`
    res.innerHTML += `<p><strong>Dia da semana:</strong>  ${semana[sem]}</p>`
    res.innerHTML += `<p><strong>Hora:</strong>  ${hora}</p>`
    res.innerHTML += `<p><strong>Minutos:</strong>  ${minuto}</p>`
    res.innerHTML += `<p><strong>Segundos:</strong>  ${segundo}</p>`
}