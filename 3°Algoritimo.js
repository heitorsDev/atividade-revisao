/*
 Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 
 Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela apenas utilizando o comando "pop".
*/
let array = []
for (let i = 1; i<=15; i++){
    array.push(i)
}
for (let i = 0; i<10; i++){
    array.pop(array.length)
}
console.log(array)