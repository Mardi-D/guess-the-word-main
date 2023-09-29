// Unordered list players guessed letters.
const guessLetterList = document.querySelector(".guessed-letters")
//Guess text button
const guessButton = document.querySelector(".guess")
//Text input to guess a letter
const guessLetter = document.querySelector(".letter")
//Paragraph for "inprogress"
const inProgess = document.querySelector(".word-in-progress")
//Paragraph for remaining quesses
const remainingGuesses = document.querySelector(".remaining")
//Span inside the paragraph where the remaining guesses will display
const guessSpan = document.querySelector("span")
//Empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message")
//Hidden button that will appear prompting the player to play again
const playButton = document.querySelector(".play-again")
//console.log()

//Starting word to test game
const word = "magnolia"

// Display symbols as placeholders 
const placehold = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
}
placehold(word)

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guesses = letterInput.value;
  console.log(guesses);
  letterInput.value = "";
});

