/*================ variable aléatoire =============*/
let randomNumber = Math.floor(Math.random() * 100) + 1;
/*========== variable principale===============*/
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let terminer;

console.log(randomNumber);
console.log(resetButton);
/*=======écouteur d'évenement sur le bouton  ========== */
guessSubmit.addEventListener('click', checkGuess);
/*=======fonction principale qui gére l'évenement ========== */
function checkGuess() {
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Propositions précédentes : ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Bravo, vous avez trouvé !';
    lastResult.style.backgroundColor = 'green';
    lastResult.classList.add('reponse')
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!! PERDU !!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Faux !';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop petit !';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop grand !';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
/*====== fonction qui finie le jeux ======*/
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  terminer = document.createElement('button');
  terminer.textContent = "terminez";
  document.querySelector('.p-jeux').appendChild(terminer);
  resetButton = document.createElement('button');
  resetButton.textContent = 'recommencez';
  document.querySelector('.p-jeux').appendChild(resetButton);
  //document.body.appendChild(resetButton);
  resetButton.addEventListener('click', () => {
      lastResult.classList.remove('reponse')
      resetGame()
  } );
  terminer.addEventListener('click', () => {
    let pa = document.querySelector('.p-accueil');
    pa.classList.toggle('slideAcc');
    lastResult.classList.remove('reponse')
    resetGame();

  })
}
/*====== fonction qui recommence le jeux ======*/
function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(terminer);
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.textContent = '';
  guesses.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
// Animation de l'accueil

let btn = document.querySelector('.btn');
let pa = document.querySelector('.p-accueil')

const slide = () => {
    pa.classList.toggle('slideAcc')
    guessField.focus();
}

btn.addEventListener('click', slide)

