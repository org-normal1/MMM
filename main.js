let array = [1, 5, 7, 7, 7, 1, 12, 2,4, 7, 8 ,9 ,10]
//Média
let soma = 0;

for(let i = 0; i < array.length; i++){
    soma += array[i]
    media = soma/array.length
}

console.log("A média da array é:",media)

//Mediana
let mediana;
if(array.length % 2 == 0){
    let meio = array.length / 2 -1
    let meio2 = array.length / 2
    mediana = (array[meio] + array[meio2] / 2)
} else {
    let meioA = Math.floor(array.length / 2)
    mediana = array[meioA]
}

console.log("A mediana da array é:",mediana)


//Moda
let teste = []
let moda = []
let quantidade = {}
let quantidadeMax = 0

array.forEach(numero => {
    quantidade[numero] = (quantidade[numero] || 0) + 1;
    if (quantidade[numero] > quantidadeMax){
        quantidadeMax = quantidade[numero]
        moda = numero
    }
});

console.log("A moda é: " + moda)

