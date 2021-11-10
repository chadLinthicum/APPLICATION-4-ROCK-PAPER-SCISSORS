/*Simple Battle Ship*/

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess; //undefined until user makes a guess// 
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter number 0-6):");
  if (guess < 0 || guess > 6) { //check the user's guess 
    alert("Please enter a valid cell number!");
  } else {

    guesses = guesses + 1; //first thing that else does

    if (guess == location1 || guess == location2 || guess == location3) { //2nd thing else does
      alert("HIT!");
      hits = hits + 1;

      //silly Chad test
      if ( hits == 1 && guesses == 2 || guesses == 3 ) {
        alert ("premature!");
      }
      

      if (hits == 3) { //second thing the previous if does
        isSunk = true;
        alert("You sank muh battleship!");
      }
    } else {
      alert("MISS!");
    }

  }
}

console.log(document.title);

var yourStats = "You took " + guesses + " guesses to sink the battleship, " +
  "which means your shooting accuracy was " + (300 / guesses + "%");
alert(yourStats);

