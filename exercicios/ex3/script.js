function contar() {
    var inicio = Number(document.getElementById('tinicio').value)
    var fim = Number(document.querySelector('input#tfim').value)
    var contar = Number(document.querySelector('input#tcontar').value)
    var res = document.getElementById('res') 

    if (inicio == 0 || fim == 0) {
        window.alert('[ERRO]Preenchas os dados a baixo!')
    }else {
        res.innerHTML = 'Contando..'
        if (contar == 0) {
            alert('Contagem inválida! Considerando passo --> 1')
            contar = 1
        }
        if(inicio<fim) {
         // for(var c=i;c<=f;c+=contar) 
         for(var c = inicio;c <= fim;c += contar) {
            res.innerHTML += `${c} `
        }
        }else {
        for(var c = inicio;c >= fim;c -= contar) {
            res.innerHTML += `${c} `
       }
         }
    }


}