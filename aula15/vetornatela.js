let vetor = [2, 6, 3, 8, 4]
vetor.sort()

/*for(let posicao=0;posicao < vetor.length; posicao++) {
    console.log(`A posiçao ${posicao} tem seus valores ${vetor[posicao]}`)
}*/
for(let posicao in vetor) /*para cada posicao em vetor*/  {
    console.log(`A posiçao ${posicao} tem seus valores ${vetor[posicao]}`)
}