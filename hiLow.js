// if (2==3) {
//   document.write("I love hot pockets!");
// }else {
//   document.write("I love strawberries!");
// }
//
//
// function hiLowGame() {
//   var randomNumber = Math.floor((Math.random()*100)+1);
//   var guessedNumber = prompt("Enter Your Guess...if you Dare...");
//   return [guessedNumber, randomNumber];
// }
//
//
// function hiLowGame() {
//   var randomNumber = function() {
//     return Math.floor((Math.random()*100)+1);
//   }
//   var guessedNumber = function() {
//     return prompt ("Enter Your Guess...");
//   }
// }

v------------Real Code------------v

//Declares Name, Random#, and Guessed# Variables
var name = "0";
var randomNumber = 0;
var guessedNumber = 0;

//function that asks for user name and generates random number between 1-100
function hiLowGame() {
  name = prompt("Enter Your Name:");
  randomNumber = Math.floor((Math.random()*100)+1);
  //prompts user for a guess and stores guess as a string
  guessedNumber = prompt("Alright " + name + " enter your guess...if you dare...");
  //returns name, randomNumber and guessNumber as [string, string, number]
  //return [name, randomNumber, guessedNumber];
  while (randomNumber){
  if (randomNumber == guessedNumber) {
    prompt ("Congragulations " + name + " You Won!!! The Secret Number was " + randomNumber + "!!!");
    break;
  }
  else if (randomNumber > guessedNumber) {
    guessedNumber = prompt ("Too Low...Try Again...");
  }
  else if (randomNumber < guessedNumber) {
    guessedNumber = prompt ("Too High...Try Again...");
  }
  else {
    guessedNumber = prompt ("Im Sorry, You Can Only Input Numbers...Try Again...");
  }
}
}

^----------Real Code--------------^

Hi/Lo Game Challenge
Create a function that plays the following game:
* The computer picks a secret random integer between 1 and 100 (both inclusive), and

* repeatedly asks the user for guesses.

* the computer notifies them If the users guess is too high or too low, ; and

* if the user guesses the secret number correctly, the computer displays a winning message and the game is over.

* Stretch goal 1: If the user has not guessed the secret number in seven tries, the user loses.

* Stretch goal 2: Validate the users input. If the user puts a anything other than a number, tell the user they can only use numbers,

* Stretch goal 3: Allow the user to put there name in before the game starts. When the user has won the game, let the user know they have won, using their name.
