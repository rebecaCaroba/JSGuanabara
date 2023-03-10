let amigo = { 
    nome: 'Pedro',
    sexo: 'M', 
    peso: 72,
    engordar(p){
        console.log('Engorgou')
        this.peso += p
    }
} //[]
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
// array e objeto sao das mesma classe e origem