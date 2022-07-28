
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const result = document.getElementById('result');
const robosc = document.getElementById('robossc');
const usrsc = document.getElementById('usrssc')

let userscore = 0;
let roboscore = 0;
let userChoice;
let roboChoice;

const gameLogic = () => {
    if(userChoice == roboChoice){
        result.innerText = 'its a drwa lets try again';
    } else if (userChoice == 0 && roboChoice == 1){
        result.innerText = 'Robo won!';
        roboscore += 1; 
        // userscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    } else if(userChoice == 0 && roboChoice == 2) {
        result.innerText = 'You won!';
        userscore += 1; 
        // roboscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    } else if(userChoice == 1 && roboChoice == 0) {
        result.innerText = 'You won!';
        userscore += 1; 
        // roboscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    } else if(userChoice == 1 && roboChoice == 2) {
        result.innerText = 'Robo won!';
        roboscore += 1; 
        // userscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    } else if(userChoice == 2 && roboChoice == 0) {
        result.innerText = 'Robo won!';
        roboscore += 1; 
        // userscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    } else if(userChoice == 2 && roboChoice == 1) {
        result.innerText = 'You won!';
        userscore += 1; 
        // roboscore -= 1;
        robosc.innerText = roboscore;
        usrsc.innerText = userscore;
    }
}
const reset = () => {
    userscore = 0; roboscore=0;
    robosc.innerText = roboscore;
    usrsc.innerText = userscore;
    result.innerText = '';
}
const rockVal = () => {
    userChoice = rock.value
    roboChoice = Math.floor(Math.random()*3);
    gameLogic();
}
const paperVal = () => {
    userChoice = paper.value
    roboChoice = Math.floor(Math.random()*3);
    gameLogic();
}
const scissorVal = () => {
    userChoice = scissor.value
    roboChoice = Math.floor(Math.random()*3);
    gameLogic();
}