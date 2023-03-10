function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.querySelector('input#txtano')
    var res = document.getElementById('res')
    if (form.value.length == 0 || Number(form.value) > ano ) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10 ) {
                //crianca
                img.setAttribute('src' , 'menino.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovemh.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'homem.jpg')
            }else {
                //idoso
                img.setAttribute('src' , 'idoso.jpg')
            }
        }else {
            genero = 'Mulher'
            if (idade < 10 ) {
                //crianca
                img.setAttribute('src' , 'menina.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovem.jpeg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'mulher.png')
            }else {
                //idoso
                img.setAttribute('src' , 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        //res.style.textAlign = 'center'
        res.appendChild(img)
    
    }

}