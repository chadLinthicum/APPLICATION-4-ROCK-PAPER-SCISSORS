const rock = 0;
const paper = 1;
const scissors = 2;
let wins = 0;
let losses = 0;
let ties = 0;



function chooseRock() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==scissors) {
    wins++;
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('userChoice').innerText = "You chose rock";
    document.getElementById('computerChoice').innerText = "Computer chose scissors";
    
    var img = new Image();
    img.src = "/assets/theRockSlam.gif";
    var winGIF = document.getElementById("winGIF");
    if (winGIF.childNodes=img) {
      winGIF.removeChild(winGIF.lastElementChild);
      winGIF.appendChild(img);
    }    
    
  } else if (computerChoice==paper) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "You chose rock";
    document.getElementById('computerChoice').innerText = "Computer chose paper";
  } else if (computerChoice==rock) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "You chose rock";
    document.getElementById('computerChoice').innerText = "Computer chose rock as well...";
  }
}

function choosePaper() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==rock) {
    wins++;
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('userChoice').innerText = "You chose paper";
    document.getElementById('computerChoice').innerText = "Computer chose rock";

    var img = new Image();
    img.src = "/assets/paperBoy.gif";
    var winGIF = document.getElementById("winGIF");
    if (winGIF.childNodes=img) {
      winGIF.removeChild(winGIF.lastElementChild);
      winGIF.appendChild(img);
    }   
    

  } else if (computerChoice==scissors) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "You chose paper";
    document.getElementById('computerChoice').innerText = "Computer chose scissors";
  } else if (computerChoice==paper) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "You chose paper";
    document.getElementById('computerChoice').innerText = "Computer chose paper as well...";
  }
}

function chooseScissors() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==paper) {
    wins++;
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('userChoice').innerText = "You chose scissors";
    document.getElementById('computerChoice').innerText = "Computer chose paper";

    var img = new Image();
    img.src = "/assets/edward.gif";
    var winGIF = document.getElementById("winGIF");
    if (winGIF.childNodes=img) {
      winGIF.removeChild(winGIF.lastElementChild);
      winGIF.appendChild(img);
    }   

  } else if (computerChoice==rock) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "You chose scissors";
    document.getElementById('computerChoice').innerText = "Computer chose rock";
  } else if (computerChoice==scissors) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "You chose scissors";
    document.getElementById('computerChoice').innerText = "Computer chose scissors as well...";
  }
}


