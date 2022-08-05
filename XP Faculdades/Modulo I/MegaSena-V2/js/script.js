// Aula 3.3.3. Mega Sena v1 - parte 3
var board = [] /*Quadro dos jogos*/;
var currentGame = [] /*Jogo atual*/;
var savedGames = [] /*Jogo realizados*/;

/*Objeto*/
var state = {board: [], currentGame: [], savedGame: []};

function start(){
   readLocalStorage();
   creatBoard();
   newGame();
}
function readLocalStorage(){
   //Testar se tem localStorage, se nao tem, da um return
   if(!window.localStorage){
      return;
   }

   var savedGameFromLocalStorage = window.localStorage.getItem('saved-Game');
   //console.log(savedGameFromLocalStorage);
   if(savedGameFromLocalStorage){
      state.savedGame = JSON.parse(savedGameFromLocalStorage); //Convertendo a string em JSON 
   }
}

function writeToLocalStorage(){
   window.localStorage.setItem('saved-Game', JSON.stringify(state.savedGame));
}

//Se ja existe alguma coisa, não existe mais
function creatBoard() {
   state.board = [] 
   for (var i = 1; i <= 60; i++){
      state.board.push(i);
   }
}

//Vai zerar o jogo
function newGame() { 
   resetGame();
   render();

   //console.log(state.currentGame)
}

function render() {
   renderBoard();
   renderButtons();
   renderSavadGame();
}

function renderBoard() {
   var divBoard = document.querySelector('#megasena-board');
   divBoard.innerHTML = ''; //Uma forma rapida de zerar isso.

   var ulNumbers = document.createElement('ul');
   ulNumbers.classList.add('numbers');
   //Criando um loop, criando LI e inserindo o numero da mega
   for (var i = 0; i < state.board.length; i++) {
      var currentNumber = state.board[i];
      
      var liNumber = document.createElement('li');
      liNumber.textContent = currentNumber;
      liNumber.classList.add('number');

      //Adicionar uma funcionalidade de click
      liNumber.addEventListener('click', handleNumberClick)

      if(isNumberInGame(currentNumber)){
         liNumber.classList.add('select-number');
      }

      ulNumbers.appendChild(liNumber);
   }
   divBoard.appendChild(ulNumbers);
}

//Serve para mostrar quem foi clicado e o valor clicado
function handleNumberClick(event) {
   var value = Number(event.currentTarget.textContent); //convertendo em number

   //Agora criando uma regra, verificando se o numero clicado ja esta no jogo etc...
   if (isNumberInGame(value)){
      //Se esta no jogo entao remova
      removeNumberInGame(value);
   }else{
      //Se não está no jogo adiciona
      addNumberToGame(value);
   }
   //console.log(state.currentGame)
   render();
}

function renderButtons() {
   var divButtons = document.querySelector('#megasena-buttons');
   divButtons.innerHTML = '';
   //divButtons.textContent = 'Teste'
   var buttonNewGame = createNewGameButton();
   var buttonRandomGame = createRandomGameButton();
   var buttonSaveGame = createSaveGameButton();

   divButtons.appendChild(buttonNewGame);
   divButtons.appendChild(buttonRandomGame);
   divButtons.appendChild(buttonSaveGame);
}

function createNewGameButton() {
   var button = document.createElement('button');
   button.textContent = 'Novo jogo';

   button.addEventListener('click', newGame);

   return button;
}

function createRandomGameButton() {
   var button = document.createElement('button');
   button.textContent = 'Jogo aleatório';

   button.addEventListener('click', randomGame);

   return button;
}

function createSaveGameButton(){
   var button = document.createElement('button');
   button.textContent = 'Salvar jogo';
   button.disabled = !isGameComplete();

   button.addEventListener('click', savedGame);

   return button;
}

function renderSavadGame() {
   var divSavedGame = document.querySelector('#megasena-saved-games');
   divSavedGame.innerHTML = '';

   if(state.savedGame.length === 0){
      divSavedGame.innerHTML = '<p>Nenhum jogo salvo.</p>';
   }else{
      var ulSavedGame = document.createElement('ul');

      for(var i = 0; i < state.savedGame.length; i++){
         var currentGame = state.savedGame[i]

         var liGame = document.createElement('li');
         liGame.textContent = currentGame.join(' - ');

         ulSavedGame.appendChild(liGame);
      }
      divSavedGame.appendChild(ulSavedGame);
   }
}

/*Função para adicionar numeros*/
function addNumberToGame(numberToAdd) {
   if(numberToAdd < 1 || numberToAdd > 60){
      console.error("Número inválido", numberToAdd);
   	return;
   }
   if(state.currentGame.length >= 6){
      console.error("O jogo já está completo.");
      return;
   }
   if(isNumberInGame(numberToAdd)){
      console.error(`${numberToAdd}. Este número ja foi escolhido.`);
      return;
   }

   state.currentGame.push(numberToAdd);/* "push" - inseri o elemento no array*/
} 

function removeNumberInGame(numberToRemove) {
   var newGame = []
   for (var i = 0;i < state.currentGame.length;i++){
      var currentNumber = state.currentGame[i];
          
      if(currentNumber === numberToRemove){
         continue
   	}
		newGame.push(currentNumber);
	}
	state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
   /*if(state.currentGame.includes(numberToCheck)){
      return true;
   }
   return false; */
   return state.currentGame.includes(numberToCheck);
}

function savedGame() {
	if(!isGameComplete()){
		console.error("O jogo não está completo.")
		return;
	}
	state.savedGame.push(state.currentGame);
   writeToLocalStorage();
   newGame();

   //console.log(state.savedGame);
}

function isGameComplete() {
	return state.currentGame.length === 6;
}

function resetGame() {
   state.currentGame = [];
}

function randomGame() {
   resetGame();

   //Enquanto o jogo não estiver completo
   while(!isGameComplete()){
   var randomNumber = Math.ceil(Math.random() * 60);
   addNumberToGame(randomNumber);   
   }
   //console.log(state.currentGame);
   render();
}

start();