console.log("Starting");

// Metodos comum de strings

const email = 'jeyffesilv@gmail.com'

const lastIndexOfA = email.lastIndexOf('a') //Obtem o index da ultima ocorrencia do caracter passado por argumento. ex:'a'
console.log(lastIndexOfA);

const emailSlice = email.slice(0,10) //cortar a string onde eu quero, começo e fim
console.log(emailSlice);

const emailReplace = email.replace('jeyffesilv','DaviJona') //substituição de string
console.log(emailReplace, email);

/* Manipulando Numbers */
//Inteiro e decimais
const radius = 10
const pi = 3.14
console.log(' ');
//console.log(radius, pi);

//Operadores aritméticos
const reminder = 5 % 2
const reminder2 = 4 % 2
console.log(reminder, reminder2);
console.log(' ');
const area = pi * radius ** 2
console.log(area);

//Operadores de incremento e decremento
let postLikes = 10
postLikes++
console.log(postLikes)
postLikes += 10
console.log(postLikes)
postLikes -= 5
console.log(postLikes)
postLikes *= 3
console.log(postLikes)
postLikes /= 2
console.log(postLikes)