/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
const twoNumbers = (value1=1, value2=2) =>
{
  return value1*value2;
}
const result = twoNumbers(15,5)
console.log(result);

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
function multTwo(num1=2, num2=5)
{
  return num1*num2
}
const sumResult = multTwo(15, 5)
console.log(sumResult);


/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
const stringExibir = (value = 0) =>
{
  for (let i=0; i<7; i++)
  {
    console.log(`Esta é a ${i+1}ª vez que essa string é exibida.`)

  }
  return value
}
const resultString = stringExibir(20);


/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
const uperMille = (valueStri=[]) =>
{
  lista = [] 
  for (let i = 0; i < valueStri.length; i++)
  {
    const wordUpper = valueStri[i].toUpperCase()
    lista.push(wordUpper);
  }
  return lista
}
const up = uperMille(millennialWords)

console.log(up)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
let sumPosi = sumNeg = tot = 0

const isPositive = (valueN = 0) =>
{
  return valueN >= 1  
}

for(let i = 0; i < randomNumbers.length; i++)
{
  isPositiveNumber = isPositive(randomNumbers[i])
  if(isPositiveNumber)
  {
    sumPosi ++;
  }else
  {
    sumNeg++;
  }
  tot ++
}

console.log(`O array "randomNumbers" possui ${tot} números, sendo ${sumPosi} positivos e ${sumNeg} negativos.`)



/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
const getOddNumbers = (numbersArr = []) =>
{
  newArray = []

  for (var i = 0; i < numbersArr.length; i++)
  {
    const num = numbersArr[i]
    const sumArray = num%2 == 1
    
    if(sumArray)
    {
      newArray.push(num)
    }
  }
  return newArray
}

const arrayN = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
console.log(arrayN)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let setence = ''
for (let i = 0; i < functions.length; i++)
{
  const stringg = functions[i]()
  setence += `${stringg} `
}
console.log(setence)