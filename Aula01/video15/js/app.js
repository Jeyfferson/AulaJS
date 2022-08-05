// Array
console.log('Teste no console do JavaScript');
let heros = ['Superman', 'Batman', 'Iron Man']
let names = ['Jeyfferson','Jessica','Davi','Jonatã']
console.log(heros);
console.log(heros[1]);

// Atribuindo novo valor a um array
heros[1] = 'Spider Man';
console.log(heros);

const ages = [31, 25, 11, 19, 28, 61]
console.log(ages);
console.log(ages[2]);

const randomArray = ['Parker', 'Diana', 19, 23]
console.log(randomArray);

// Métodos de array
console.log(heros.length);

const joinNames = names.join(' | ');
console.log(joinNames);

const agesIndexOf = ages.indexOf(28);
console.log(agesIndexOf);

const moreHeros = heros.concat(['Catwoman', 'Diana','Wolverine']) //Não altera o valor original
console.log(moreHeros);

const pushHeros = heros.push('Catwoman', 'Diana','Wolverine') // Altera o valor original
console.log(pushHeros);

console.log(heros);
const popHeros = heros.pop() //Elimina o ultimo valor e mostra ele no console. Altera o valor original
console.log(popHeros);
console.log(heros);