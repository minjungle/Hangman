const startGame = document.getElementById("startButton");
const endResult = document.getElementById("result");
let isGameOngoing = false;
let numberOfGuesses = 6;
let answerArray = [];

let words = [
  "array",
  "element",
  "object",
  "combinators",
  "function",
  "whileloop",
  "forloop",
  "class",
  "attribute",
];
let word = words[Math.floor(Math.random() * words.length)];

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function retrieveAllMatchingLetterIndex(userLetterChoice, randomWord) {
  const matchingIndexesOfLetterChoice = word
    .split("")
    .map(function (letter, index) {
      if (userLetterChoice === letter) return index;
    })
    .filter(function (indexOfLetter) {
      return indexOfLetter !== undefined;
    });

  return matchingIndexesOfLetterChoice;
}

window.onload = function () {
  createAlphabetButtons();
};
function createAlphabetButtons() {
  alphabet.forEach((value, index) => {
    let button = document.createElement("button");
    button.addEventListener("click", function (ev) {
      let retrievedIndexes = retrieveAllMatchingLetterIndex(
        ev.target.outerText,
        word
      );
      let shown = document.querySelectorAll(".show");
      console.log(shown);

      if (word.includes(ev.target.outerText) === false) {
        button.disabled = true;
        numberOfGuesses--;
        console.log(numberOfGuesses);
        if (numberOfGuesses === 0) {
          endResult.textContent = "You Lost";
        }
      }

      console.log(ev.target);
      // if player clicks on the button but incorrectly guesses the letter (the letter is not included in the element of the word array. ), disable it from being clicked further. Decrease remaining life by 1.
      // if player clicks on a wrong letter again, takeaway another life. - loop
      //if number of guesses exceeds 6.
      // end game, show all letters, say you lose.
      console.log(retrievedIndexes, word);
      document.querySelectorAll("p").forEach(function (ptag, index) {
        retrievedIndexes.forEach(function (retrievedIndex) {
          if (retrievedIndex === index) {
            ptag.classList.add("show");
            answerArray.push(ev.target.outerText);
            console.log(isArrayEqual(answerArray, word.split("")));
            if (isArrayEqual(answerArray, word.split(""))) {
              console.log("you Won");
            }
          }
        });
      });
    });
    button.textContent = value;
    document.querySelector(".letters").appendChild(button);
  });
}

// these are the indexes of letter that need to be uncovered.
const matchingIndexes = retrieveAllMatchingLetterIndex("a", "class");
console.log(matchingIndexes);

//Adding event listener to handle player clicking on startButton.
startGame.addEventListener("click", () => onClickStart());

// When player clicks startGame, changes the game state to ongoing and generates a random word from wordlist.
const onClickStart = () => {
  draw(word);
  //
};
/**
 *
 * @param {string} word - split into divs.
 */
function draw(word) {
  word.split("").forEach((letter) => {
    const div = underlineStrokes();
    addLetterToDiv(div, letter);
    document.getElementById("displayGame").appendChild(div);
  });
}
const isArrayEqual = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

function addLetterToDiv(div, letter) {
  const p = document.createElement("p");
  // p.classList.add('hide');
  p.style.margin = "50%";
  p.style.minHeight = "100px";
  p.textContent = letter;
  p.classList.add("hide");
  div.appendChild(p);
}

function underlineStrokes() {
  const div = document.createElement("div");
  div.style.borderBottom = "2px black solid";
  div.style.margin = "0 20px";
  div.style.minHeight = "100px";
  div.style.minWidth = "50px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  return div;
}
