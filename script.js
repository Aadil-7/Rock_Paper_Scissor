// ACCESSING ALL THE REQUIRED ELEMENTS
const result = document.getElementById('result');
const robosc = document.getElementById('robossc');
const usrsc = document.getElementById('usrssc');
const rpsValues = ['rock', 'paper', 'scissor']

// DECLARING CHOICES OF EACH PLAYER
let roboChoice;
let userChoice;
// GENERATING RANDOM ROBOT CHOICE. 
const autoChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return rpsValues[choice]
}

// CREATING BOJECT TO KEEP TRACK OF SCORE.
const score = {
    userScore: 0,
    roboScore: 0
}

// DECLARING FUNCTIONS TO OBTAIN USER CHOICE AND RUNNING GAME LOGIC AND ALSO UPDATING SCORE.
const rockVal = () => {
    roboChoice = autoChoice()
    userChoice = rpsValues[0];
    game();
    scoreUpdate();
}
const paperVal = () => {
    userChoice = rpsValues[1];
    roboChoice = autoChoice()
    game();
    scoreUpdate();
}
const scissorVal = () => {
    userChoice = rpsValues[2];
    roboChoice = autoChoice()
    game();
    scoreUpdate();
}
// DECLARING FUNCTION TO UPDATE SCORE.
const scoreUpdate = () => {
    robosc.innerText = score["roboScore"]
    usrsc.innerText = score["userScore"]
}
// DECLARING FUNCTION TO RESET GAME.
const reset = () => {
    score["roboScore"] = 0;
    score["userScore"] = 0;
    robosc.innerText = score["roboScore"]
    usrsc.innerText = score["userScore"]
    result.innerText = '';
}

// DECLARING FUNCTION WHICH CARRYS MAIN LOGIC OF GAME BY COMPARING USER'S CHOICE AND COMPUTER'S CHOICE AND UPDATING SCORE.
const game = () => {
    if (score["userScore"] == 5) {
        alert(`Congratulations you won this game.`);
        reset();
    } else if (score["roboScore"] == 5) {
        alert(`Hmm... You lost, try again.`);
        reset();
    } else {
        if (userChoice == roboChoice) {
            result.innerText = 'Its a tie!';
        } else if (userChoice == 'rock' && roboChoice == 'scissor') {
            result.innerText = 'You won!';
            score["userScore"] += 1;
        } else if (userChoice == 'paper' && roboChoice == 'rock') {
            result.innerText = 'You won!';
            score["userScore"] += 1;
        } else if (userChoice == 'scissor' && roboChoice == 'paper') {
            result.innerText = 'You won!';
            score["userScore"] += 1;
        } else {
            result.innerText = 'Robo won!';
            score["roboScore"] += 1;
        }
    }
}