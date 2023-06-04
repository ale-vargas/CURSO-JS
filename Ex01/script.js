function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minuto}.</p>`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'Imagens/manha.png'
        document.body.style.background = '#CDAA7D'
    } else if (hora >= 12  && hora <= 18) {
        // boa tarde
        img.src = 'Imagens/tarde.png'
        document.body.style.background = '#8B4726'
    } else {
        // boa noite
        img.src = 'Imagens/noite.png'
        document.body.style.background = '#4F4F4F'
    }
}