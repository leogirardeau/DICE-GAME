/* 
Generating a random number between 1 and 6
then get a number given by the user and compare it to the generated number
IF number is smaller, log "Votre nombre est trop petit"
ELIF  number is bigger, log "Votre nombre est trop grand"
ElSE, Correct number, log "Bravo ! vous avez deviné ce nombre en X essais"
*/

// Variables
let nbEssais = 0;
let toGuess = 0;
let submit = document.getElementById("submit");
let displayHTML = document.getElementById("reponse");
let essaiText = document.getElementById("essai");

// Functions

// Lancer de dé
function valueDiceToGuess() {
  toGuess = Math.floor(Math.random() * 6 + 1);
}
valueDiceToGuess();
console.log(toGuess);

// Aller chercher le numéro

function displayResults() {
  essai = document.getElementById("essai").value;
  if (essai > 0 && essai < 7) {
    nbEssais++;
    if (essai < toGuess) {
      displayHTML.innerHTML = "Votre nombre est trop petit.";
    } else if (essai > toGuess) {
      displayHTML.innerHTML = "Votre nombre est trop grand.";
    } else if (essai === toGuess && nbEssais === 1) {
      displayHTML.innerHTML = "Bravo ! Vous avez deviné du premier coup !";
      nbEssais = 0;
      valueDiceToGuess();
    } else if (essai === toGuess) {
      displayHTML.innerHTML = `Bravo ! Vous avez deviné ce nombre en <span> ${nbEssais} </span> essais. Une nouvelle partie ?`;
      nbEssais = 0;
      valueDiceToGuess();
    }
  } else {
    displayHTML.innerHTML = "Cette proposition n'est pas possible !";
  }
  essaiText.value = "";
  essaiText.focus();
}

// Click Event

submit.addEventListener("click", displayResults);

// Enter Event

essai.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
    displayResults();
  }
});

console.log(nbEssais);
console.log(essai);
