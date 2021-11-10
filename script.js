/* Rock, Paper, Scissors */

var computerGuess = Math.floor(Math.random() * 3);
var rock = 0;
var paper = 1;
var scissors = 2;
var guess; //undefined until user makes a guess// 
var wins = 0;
var losses = 0;
var gameOver = false;

////
console.log(computerGuess);
while (gameOver == false) {
  guess = prompt("Choose your weapon! (R, P, S)");
  if (guess != "R" && guess != "P" && guess != "S") {
    alert("Doh! That weapon is unavailable!");
  } else if (guess == "R" && computerGuess==rock) {
    alert("Tie!");
    gameOver = true;
  } else if (guess == "R" && computerGuess==paper) {
    alert("Lose");
    gameOver = true;
    losses = losses + 1;
    console.log("Losses: " + losses);
  } else if (guess == "R" && computerGuess==scissors) {
    alert("Win")
    gameOver = true;
    win = wins + 1;
    console.log("Wins: " + win);
  } else if (guess == "P" && computerGuess==rock) {
    alert("Win!");
    gameOver = true;
    win = wins + 1;
    console.log("Wins: " + win);
  } else if (guess == "P" && computerGuess==paper) {
    alert("Tie");
    gameOver = true;
  } else if (guess == "P" && computerGuess==scissors) {
    alert("Lose!")
    gameOver = true;
    losses = losses + 1;
    console.log("Losses: " + losses);
  } else if (guess == "S" && computerGuess==rock) {
    alert("Lose!");
    gameOver = true;
    losses = losses + 1;
    console.log("Losses: " + losses);
  } else if (guess == "S" && computerGuess==paper) {
    alert("Win");
    gameOver = true;
    win = wins + 1;
    console.log("Wins: " + win);
  } else if (guess == "S" && computerGuess==scissors) {
    alert("Tie")
    gameOver = true;
  }
}








//   if (guess < 0 || guess > 6) { //check the user's guess 
//     alert("Please enter a valid cell number!");
//   } else {

//     guesses = guesses + 1; //first thing that else does

//     if (guess == location1 || guess == location2 || guess == location3) { //2nd thing else does
//       alert("HIT!");
//       hits = hits + 1;

//       //silly Chad test
//       if ( hits == 1 && guesses == 2 || guesses == 3 ) {
//         alert ("premature!");
//       }
      

//       if (hits == 3) { //second thing the previous if does
//         isSunk = true;
//         alert("You sank muh battleship!");
//       }
//     } else {
//       alert("MISS!");
//     }

//   }
// }

// console.log(document.title);

// var yourStats = "You took " + guesses + " guesses to sink the battleship, " +
//   "which means your shooting accuracy was " + (300 / guesses + "%");
// alert(yourStats);

