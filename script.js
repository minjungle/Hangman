const startGame = document.getElementById("startButton");
const endResult = document.getElementById("result");
const livesRemaining = document.getElementById("livesRemaining");
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
  "consolelog",
  "document",
  "variable",
  "queryselector",
  "appendchild",
  "style",
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

function retrieveAllMatchingLetterIndex(userLetterChoice) {
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
  alphabet.forEach(function (value) {
    let button = document.createElement("button");
    button.addEventListener("click", function (ev) {
      let retrievedIndexes = retrieveAllMatchingLetterIndex(
        ev.target.outerText,
        word
      );

      if (word.includes(ev.target.outerText) === false) {
        button.disabled = true;
        numberOfGuesses--;
        livesRemaining.textContent = `You have ${numberOfGuesses} lives remaining`;
        if (numberOfGuesses === 0) {
          endResult.textContent = "You Lost";
        }
      }

      document.querySelectorAll("p").forEach(function (ptag, index) {
        retrievedIndexes.forEach(function (retrievedIndex) {
          if (retrievedIndex === index) {
            ptag.classList.add("show");
            answerArray.push(ev.target.outerText);
            if (isArrayEqual(answerArray, word.split(""))) {
              endResult.textContent = "Winner!";
            }
          }
        });
      });
    });
    button.textContent = value;
    document.querySelector(".letters").appendChild(button);
  });
}

startGame.addEventListener("click", function () {
  draw(word);
});

function draw(word) {
  word.split("").forEach(function (letter) {
    const div = createUnderlines();
    addLetterToDiv(div, letter);
    document.getElementById("displayGame").appendChild(div);
  });
}
const isArrayEqual = (answerWord, generatedWord) => {
  const hasMatchingLength = answerWord.length === generatedWord.length;
  const hasAllLetters = answerWord.every((letter) =>
    generatedWord.includes(letter)
  );

  const isWin = hasAllLetters && hasMatchingLength;
  return isWin;
};

function addLetterToDiv(div, letter) {
  const p = document.createElement("p");
  p.style.margin = "50%";
  p.style.minHeight = "100px";
  p.textContent = letter;
  p.classList.add("hide");
  div.appendChild(p);
}

function createUnderlines() {
  const div = document.createElement("div");
  div.style.borderBottom = "2px black solid";
  div.style.margin = "0 20px";
  div.style.minHeight = "100px";
  div.style.minWidth = "50px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  return div;
}
