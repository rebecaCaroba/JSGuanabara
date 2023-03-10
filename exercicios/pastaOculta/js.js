function next(){
    let res = document.getElementById('res')
    function soma(n){
        //var soma = n * n
        //return soma
        return n * n
    }
    let mult = soma(6)
    res.innerHTML = `O valor é ${mult}`
}

function add(){
    let nome = String(document.querySelector('input#nome').value)
    let ress = document.getElementById('ress')

    function addNome(nome){
        if (nome.length == 0)  {
            return 'Qual é sua graça?'
        }else{
            return 'Seu nome é '+ nome + '!'
        }
    }
    ress.innerHTML = addNome(nome)
}
