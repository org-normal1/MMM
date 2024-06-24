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

for(let i = 0; i < array.length; i++){
    for(let j = 0; i < array.length; i++){
        if(array[i] == array[j]){
            if(array[i] > array[j]){
                teste.push(array[i])
            }else
                teste.push(array[j])
        }
    }
}

console.log(teste)

