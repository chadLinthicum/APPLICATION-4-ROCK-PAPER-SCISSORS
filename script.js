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
    document.getElementById('userChoice').innerText = "... You chose rock ...";
    document.getElementById('computerChoice').innerText = "... Computer chose scissors ...";
    
    var img = new Image();
    img.src = "assets/therockslam.gif";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }    
    
  } else if (computerChoice==paper) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "... You chose rock ...";
    document.getElementById('computerChoice').innerText = "... Computer chose paper ...";

    var img = new Image();
    img.src = "assets/youlose.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }

  } else if (computerChoice==rock) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "... You chose rock ...";
    document.getElementById('computerChoice').innerText = "... Computer chose rock as well ...";

    var img = new Image();
    img.src = "assets/draw.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }
  }
}

function choosePaper() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==rock) {
    wins++;
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('userChoice').innerText = "... You chose paper ...";
    document.getElementById('computerChoice').innerText = "... Computer chose rock ...";

    var img = new Image();
    img.src = "assets/paperboy.gif";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
      img.className = "GIFs";
    }   
  
  } else if (computerChoice==scissors) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "... You chose paper ...";
    document.getElementById('computerChoice').innerText = "... Computer chose scissors ...";

    var img = new Image();
    img.src = "assets/youlose.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }

  } else if (computerChoice==paper) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "... You chose paper ...";
    document.getElementById('computerChoice').innerText = "... Computer chose paper as well ...";

    var img = new Image();
    img.src = "assets/draw.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }
  }
}

function chooseScissors() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==paper) {
    wins++;
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('userChoice').innerText = "... You chose scissors ...";
    document.getElementById('computerChoice').innerText = "... Computer chose paper ...";

    var img = new Image();
    img.src = "assets/edward.gif";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }   

  } else if (computerChoice==rock) {
    losses++;
    document.getElementById('losses').innerText = "Losses: " + losses;
    document.getElementById('userChoice').innerText = "... You chose scissors ...";
    document.getElementById('computerChoice').innerText = "... Computer chose rock ...";

    var img = new Image();
    img.src = "assets/youlose.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }

  } else if (computerChoice==scissors) {
    ties++;
    document.getElementById('ties').innerText = "Ties: " + ties;
    document.getElementById('userChoice').innerText = "... You chose scissors ...";
    document.getElementById('computerChoice').innerText = "... Computer chose scissors as well ...";

    var img = new Image();
    img.src = "assets/draw.png";
    var gameResult = document.getElementById("gameResult");
    if (gameResult.childNodes=img) {
      gameResult.removeChild(gameResult.lastElementChild);
      gameResult.appendChild(img);
    }
  }
}


