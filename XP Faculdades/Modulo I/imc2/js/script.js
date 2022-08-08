
const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');
const resultado = document.getElementById('result');
function go(currentStep, nextStep){
     let dNone, dBlock; //variavel que recebe o display none
     if(currentStep == 1)
     {
         dNone = firstDiv;
     }
     else if(currentStep == 2)
     {
         dNone = secondDiv;
     }
     else if( currentStep == 3)
     {
          dNone = finalDiv;
     }
     dNone.style.display = 'none';

     if(nextStep == 1)
     {
         dBlock = firstDiv;
     }
     else if(nextStep == 2)
     {
         dBlock = secondDiv;
     }
     else if(nextStep == 3)
     {
          dBlock = finalDiv;
     }
     dBlock.style.display = 'block';
}

function validate(){
     const altura = document.getElementById('height');
     const peso = document.getElementById('weight');
     peso.style.border = 'none';
     altura.style.border = 'none';

     const styleColor = '2px solid red';

     if(!peso.value || !altura.value)
     {
          //console.log('Campos incorretos');
          if(!peso.value && !altura.value)
          {
               //console.log('Não temos nem peso nem altura');
               peso.style.border = styleColor; 
               altura.style.border = styleColor
          }
          else if(!peso.value)
          {
               //console.log('Não temos o peso');
               peso.style.border = styleColor
          }
          else
          {
               //console.log('Não temos a altura');
               altura.style.border = styleColor
          }
     }
     else
     {
          let imc = peso.value / (altura.value * altura.value);
          if(imc < 16)
          {
               console.log("Faixa inválida");
                resultado.style.fontSize = '25px';               
                resultado.style.color = 'yellow';
                resultado.innerHTML = `${imc.toFixed(2)} | Faixa inválida`;
          }
          else if(imc == 16 && imc <= 16.9 )
          {
               console.log("Muito abaixo do peso");
               resultado.style.color = 'yellow';
               resultado.innerHTML = `${imc.toFixed(2)} | Muito abaixo do peso`;
          }
          else if(imc > 17 && imc <= 18.4)
          {
               console.log("Abaixo do peso");
               resultado.style.color = 'yellow';
               resultado.innerHTML = `${imc.toFixed(2)} | Abaixo do peso`;
          }
          else if(imc > 18.5 && imc <= 24.9)
          {
               console.log("Peso normal");
               resultado.style.color = 'green';
               resultado.innerHTML = `${imc.toFixed(2)} | Peso normal`;
          }
          else if(imc > 25 && imc <= 29.9)
          {
               console.log("Acima do peso");
               resultado.style.color = 'green';
               resultado.innerHTML = `${imc.toFixed(2)} | Acima do peso`;
          }
          else if(imc > 30 && imc <= 34.9)
          {
               console.log("Obesidade grau I");
               resultado.style.color = 'green';
               resultado.innerHTML = `${imc.toFixed(2)} | Obesidade grau I`;
          }
          else if(imc > 35 && imc <= 40)
          {
               console.log("Obesidade grau II");
               resultado.style.color = 'red';
               resultado.innerHTML = `${imc.toFixed(2)} | Obesidade grau II`;
          }
          else if(imc > 40)   
          {
               console.log("Obesidade grau III")
               resultado.style.color = 'red';
               resultado.innerHTML = "Obesidade grau III";
          }
          go(2,3);    
     }     
}