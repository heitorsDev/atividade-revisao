/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/
let arrayNova = []
arrayNova = prompt("Insira 3 novos produtos").split(", ")

if (arrayNova[arrayNova.length-1]!="leite"){
    arrayNova.push("leite")
}
console.log(arrayNova)
 
