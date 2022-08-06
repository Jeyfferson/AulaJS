// Booleans e comparações
console.log(true, false, 'true','false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('bruce') // vai verificar se uma string existe dentro da variavel
console.log(includes)

const names = ['dio', 'roger', 'robert']
let arrayIncludes = names.includes('roger')
console.log(arrayIncludes)
arrayIncludes = names.includes('rob')
console.log(arrayIncludes)

// Comparação de operadores
const age = '31'
console.log(age === 31)
console.log(age == 31)
console.log(age != 35)