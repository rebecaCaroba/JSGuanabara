// calcular fatorial: 5! = 5*4*3*2*1
function fatorial(n) {
    let fat = 1
    for(let c=n;c > 1;c--){ // c=5; enquanto c for maior do que 5;c--
        fat *= c
    }
    return fat
} 
console.log(fatorial(5))// chamada