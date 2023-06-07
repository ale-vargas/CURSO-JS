function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { 
                // criança
                img.setAttribute('src', 'Imagens/criancaM.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'Imagens/jovemM.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'Imagens/adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'Imagens/idosoM.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { 
                // criança
                img.setAttribute('src', 'Imagens/criancaF.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'Imagens/jovemF.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'Imagens/adultoF.png')
            } else {
                //idoso
                img.setAttribute('src', 'Imagens/idosoF.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
