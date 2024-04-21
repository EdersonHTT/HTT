const nomeThe = "dwayne"
const sobreNome = "The Rock"
let anoThe = 1972
anoThe = Number(anoThe)
const idadeThe = 2024 - anoThe

console.log("Nome: "+ nomeThe +" "+ sobreNome+"\nAno de Nacimento: "+ anoThe+"\nIdade: "+ idadeThe)
alert("Nome: "+ nomeThe +" "+ sobreNome+"\nAno de Nacimento: "+ anoThe+"\nIdade: "+ idadeThe)

let seuNome = prompt("Qual seu nome?")
let seuSobrenome = prompt("Qual seu sobrenome?")
let seuNacimento = prompt("Qual ano você nasceu?")
seuNacimento = Number(seuNacimento)
let suaIdade = 2024 - seuNacimento

console.log("Seu Nome: "+ seuNome +" "+ seuSobrenome+"\nSeu ano de Nacimento: "+ seuNacimento+"\nSua Idade: "+ suaIdade)
alert("Seu Nome: "+ seuNome +" "+ seuSobrenome+"\nSeu ano de Nacimento: "+ seuNacimento+"\nSua Idade: "+ suaIdade)

let comparar = suaIdade >= idadeThe
let comparar2 = suaIdade <= idadeThe
console.log("Mais velho que The Rock: "+ comparar+ "\nEle é mais velho: "+ comparar2)
alert("Mais velho que The Rock: "+ comparar+ "\nEle é mais velho: "+ comparar2)


