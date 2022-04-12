const startGame = document.getElementById('startButton')
let isGameOngoing = false;
let numberOfGuesses = 6; 
let answerArray = [];

let words = ["array","element","object","dotnotation","combinators","descendantselector",
  "childselector","pseudoclasses","documentobjectmodel","addeventlistener",
  "eventtarget","callbackfunction","higherorderfunction","function",
  "eventdelegation","arrowfunctions","whileloop","forloop","functionexpression",
  "functiondeclaration","class","attribute"]
let word = words[Math.floor(Math.random() * words.length)]; 

// Adding event listener to handle player clicking on startButton. 
startGame.addEventListener("click", () => onClickStart()); 

// When player clicks startGame, changes the game state to ongoing and generates a random word from wordlist. 
  const onClickStart = () => {
    draw(word); 
// 
 
}

function draw(word){
  word.split("").forEach((letter) => {
    const div = underlineStrokes(); 
    addLetterToDiv(div, letter); 
    document.getElementById("displayGame").appendChild(div);
  });
}
  function addLetterToDiv(div, letter) {
  const p = document.createElement("p");
 // p.classList.add('hide');
  p.style.margin = "50%";
  p.style.minHeight = '100px'; 
  p.textContent = letter;
  p.classList.add('hide'); 
  div.appendChild(p);
  }

function underlineStrokes() {
   const div = document.createElement("div");
  div.style.borderBottom = "2px black solid";
  div.style.margin = "0 20px";
  div.style.minHeight = '100px'; 
  div.style.minWidth = "50px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  return div; 
}



// while (remainingLetters > 0 && numberOfGuesses >0) {
//   alert(answerArray.join(" ")); 
//   guess = prompt(`Guess a letter, or click Cancel to stop playing// you have ${remainingLetters} remaining and ${numberOfGuesses} Guesses`);
// if (guess.length !==1){
//     alert("Please enter a single letter.");
//   } else {
//     for (let j=0; j <word.length; j++){
//       if (word[j]===guess){
//         answerArray[j]=guess;
//         remainingLetters--; 
//         numberOfGuesses++
//       } 
     
//     }
//        numberOfGuesses--;  
//   }
// }

