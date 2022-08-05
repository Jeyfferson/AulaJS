function start(){
     /*console.log("Starting...") Sempre usar para testar se está funcionando;
     console.log(calculateImc(99, 1.81));*/
     var buttonCalculateImc = document.querySelector('#button-imc');
     console.log(buttonCalculateImc);
     buttonCalculateImc.addEventListener('click', handleButtonClick)

     var inputWeight = document.querySelector('#input-weight');
     var inputHeight = document.querySelector('#input-height');

     inputHeight.addEventListener('input', handleButtonClick);
     inputWeight.addEventListener('input', handleButtonClick);

     handleButtonClick()
}
start()

function calculateImc(weight, height){
     return weight / (height * height);
}

function handleButtonClick(){
     console.log('Cliquei')
     var inputWeight = document.querySelector('#input-weight');
     var inputHeight = document.querySelector('#input-height');
     var imcResult = document.querySelector('#imc-result');

     var height = Number(inputHeight.value);
     var weight = Number(inputWeight.value);

     var imc = calculateImc(weight, height);
     var formattedimc = imc.toFixed(2).replace('.',',');

     imcResult.textContent = formattedimc;
     console.log(imc);
     console.log(height);
     console.log(weight);

}