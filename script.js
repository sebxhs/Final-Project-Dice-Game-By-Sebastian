
const buttonroll = document.getElementById('roll');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const scoreplayer = document.getElementById('ScorePlayer');
const scoreplayertotal = document.getElementById('ScorePlayertotal');
const scorecomputer = document.getElementById('ScoreGuest');
const scorecomputertotal = document.getElementById('ScoreGuesttotal');
const round = document.getElementById('round');
const popup = document.getElementById("newpopup");
const playagain = document.getElementById("close-pop-up");
const winner = document.getElementById("user");
const winnerPicture = document.getElementById("profilepop");
const finishtotal = document.getElementById("finishtotal");
const reset = document.getElementById("reset");
const title = document.getElementById("title");
const title2 = document.getElementById("title2");
const question = document.getElementById("question")
const instructions = document.getElementById('instructions');
////////////////

class Player {
    constructor(name, score, total) {
      this.name = name;
      this.score = score;
      this.total = total;
    }
  }
  
  const player = new Player("Player", 0, 0);
  const computer = new Player("Computer", 0, 0);

/////////////////

var rounds = 1;
var endOfround = 3;
var ifPopupisShowed = false;
var click = 1;
/////////////////////

title.addEventListener('click', function(){
       if (click == 1){
       question.style.marginRight = '28px';
       }
       else if (click == 2){
       question.style.marginRight = '-34px';
       } else if (click == 3){
       click = 1;
       if (click == 1){
       question.style.marginRight = '28px';
       }
       else if (click == 2){
       question.style.marginRight = '-34px';
       }}
        click++;
});
/////////////////////
function myFunction(){
    popup.style.display = "none";
    clear();
}

function clear (){
    player.score = 0, computer.score = 0;
    player.total = 0, computer.total = 0;
    rounds = 1;
    scorecomputertotal.innerHTML = `Total Score: ${computer.total}`;
    scorecomputer.innerHTML = `Score: ${computer.score}`;
    scoreplayertotal.innerHTML = `Total Score: ${player.total}`;
    scoreplayer.innerHTML = `Score: ${player.score}`;
    round.innerHTML = `Begin!`;
    dice1.src = 'images/dice-1.png';
    dice2.src = 'images/dice-1.png';
    dice3.src = 'images/dice-1.png';
    dice4.src = 'images/dice-1.png';
};

reset.addEventListener('click', clear);

/////////////////////

playagain.addEventListener('click', function(){
    popup.style.display = "none";
    player.score = 0, computer.score = 0;
    player.total = 0, computer.total = 0;
    rounds = 0;
    rounds++;
    round.innerHTML = `Round #${rounds}`;
    if (rounds == 1){
    scorecomputertotal.innerHTML = `Total Score: ${computer.total}`;
    scorecomputer.innerHTML = `Score: ${computer.score}`;
    scoreplayertotal.innerHTML = `Total Score: ${player.total}`;
    scoreplayer.innerHTML = `Score: ${player.score}`;
    }
});

////////////////////////////////

buttonroll.addEventListener('click', function(){
    var audio = new Audio('sound/dicesound.mp3')
    audio.play()
    popup.style.opacity = 0;
        var Diceimages = new Array("images/dice-1.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png",);
        var randomNum = (Math.floor(Math.random() * Diceimages.length)+ 1);
        dice1.src = Diceimages[randomNum - 1];

        var Diceimages1 = new Array("images/dice-1.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png",);
        var randomNum1 = (Math.floor(Math.random() * Diceimages.length)+ 1);
        dice2.src = Diceimages1[randomNum1 - 1];

        if(randomNum == 1 || randomNum1 == 1){
            player.score = 0;
            scoreplayer.innerHTML = `Score: ${player.score}`;
            scoreplayertotal.innerHTML = `Total Score: ${player.total}`
        }
        else {
            if(randomNum == randomNum1){
                player.score = ((randomNum) + (randomNum1)) * 2;
                scoreplayer.innerHTML = `Score: ${player.score}`;
                player.total += player.score;
                scoreplayertotal.innerHTML = `Total Score: ${player.total}`;    
            }
            else if (randomNum != randomNum1){
                scoreplayer.innerHTML = `Score: ${(randomNum) + (randomNum1)}`;
                player.score += randomNum + randomNum1;
                scoreplayertotal.innerHTML = `Total Score: ${player.total}`;    
            }
        }
        var Diceimages2 = new Array("images/dice-1.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png",);
        var randomNum2 = (Math.floor(Math.random() * Diceimages.length) + 1);
        dice3.src = Diceimages2[randomNum2 - 1];

        var Diceimages3 = new Array("images/dice-1.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png",);
        var randomNum3 = (Math.floor(Math.random() * Diceimages.length) + 1);
        dice4.src = Diceimages3[randomNum3 - 1];

        if(randomNum2 == 1 || randomNum3 == 1){
            computer.score = 0;
            scorecomputer.innerHTML = `Score: ${computer.score}`;
            scorecomputertotal.innerHTML = `Total Score: ${computer.total}`
           } 
           else {
            if(randomNum2 == randomNum3){
            computer.score = ((randomNum2) + (randomNum3)) * 2;
            scorecomputer.innerHTML = `Score: ${computer.score}`;
            computer.total += computer.score;
            scorecomputertotal.innerHTML = `Total Score: ${computer.total}`;    
            }
            else if (randomNum2 != randomNum3){
            scorecomputer.innerHTML = `Score: ${(randomNum2) + (randomNum3)}`;
            computer.totalr += randomNum2 + randomNum3;
            scorecomputertotal.innerHTML = `Total Score: ${computer.total}`;    
            }}
        console.log(`roll ${rounds}`);
        round.innerHTML = `Round #${rounds}`;
        rounds++;

        if (rounds == 0){
            round.innerHTML = `Begin!`;
        } if (rounds == 4){
        console.log('end of game!')
        popup.style.display = "block";
        setTimeout(() => {
        popup.style.opacity = 1;
        popup.style.visibility = "visible";
        }, 10);
        timeout = 0;
        ifPopupisShowed = true;
        if (computer.total > player.total){
        winnerPicture.src = `images/profile.png`
        winner.innerHTML = `Computer!`
        finishtotal.innerHTML = `Total Score: ${computer.total}`;
        } else {
        winnerPicture.src = `images/profile2.png`;
        winner.innerHTML = `Sebastian!`;
        finishtotal.innerHTML = `Total Score: ${player.total}`;
        }
        if (computer.total == player.total){
        winner.innerHTML = `A Tie!`
        finishtotal.innerHTML = `Total Score: ${computer.total}`;
        }
        popup.style.visibility = "hidden";
        rounds = 0;
        console.log(rounds);
        } 
});
