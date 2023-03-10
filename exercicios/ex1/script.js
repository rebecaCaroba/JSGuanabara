function carregar() {
    var t = document.getElementById('titulo')
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora < 12) {
        //dia
        img.src = 'manha.jpg' // add o arquivo na tag img
        document.body.style.background = '#ffdc9c'
        t.innerHTML = 'Bom dia!'
    } else if (hora <= 18 ) {
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#c35611'
        t.innerHTML = 'Boa tarde!'
    }else {
        //noite
        img.src = 'noite.jpg'
        document.body.style.background = '#414150'
        t.innerHTML = 'Boa noite!'
    }
}
