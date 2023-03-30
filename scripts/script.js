
const buttonroll = document.getElementById('roll');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const scoreplayer = document.getElementById('ScorePlayer');
const scoreplayertotal = document.getElementById('ScorePlayertotal');
const scoreguest = document.getElementById('ScoreGuest');
const scoreguesttotal = document.getElementById('ScoreGuesttotal');
const round = document.getElementById('round');
var count = 0;

buttonroll.addEventListener('click', function(){
    var audio = new Audio('sound/dicesound.mp3')
    audio.play()

        var Diceimages = new Array('images/dice-1.png','images/dice-2.png','images/dice-3.png','images/dice-4.png','images/dice-5.png','images/dice-6.png');
        var randomNum = Math.floor(Math.random() * Diceimages.length);
        dice1.src = Diceimages[randomNum];

        var Diceimages1 = new Array('images/dice-1.png','images/dice-2.png','images/dice-3.png','images/dice-4.png','images/dice-5.png','images/dice-6.png');
        var randomNum1 = Math.floor(Math.random() * Diceimages.length);
        dice2.src = Diceimages1[randomNum1];

        if(randomNum == 0){
            randomNum = 0;
            randomNum1 = 0;
            scoreplayer.innerHTML = `Score: 0`;
            scoreplayertotal.innerHTML = `Total Score: 0`
        }
        else if(randomNum1 == 0){
            scoreplayer.innerHTML = `Score: 0`;
            scoreplayertotal.innerHTML = `Total Score: 0`
        } else {

            if(randomNum == randomNum1){
                scoreplayer.innerHTML = `Score: ${(randomNum + 1) * (randomNum1 + 1)}`;
                scoreplayertotal.innerHTML = `Total Score: ${(randomNum + 1) * (randomNum1 + 1)}`;    
            }
            else if (randomNum != randomNum1){
                scoreplayer.innerHTML = `Score: ${(randomNum + 1) + (randomNum1 + 1)}`;
                scoreplayertotal.innerHTML = `Total Score: ${(randomNum + 1) + (randomNum1 + 1)}`;    
            }
        }

        var Diceimages2 = new Array('images/dice-1.png','images/dice-2.png','images/dice-3.png','images/dice-4.png','images/dice-5.png','images/dice-6.png');
        var randomNum2 = Math.floor(Math.random() * Diceimages.length);
        dice3.src = Diceimages2[randomNum2];

        var Diceimages3 = new Array('images/dice-1.png','images/dice-2.png','images/dice-3.png','images/dice-4.png','images/dice-5.png','images/dice-6.png');
        var randomNum3 = Math.floor(Math.random() * Diceimages.length);
        dice4.src = Diceimages3[randomNum3];

        if(randomNum2 == 0){
            randomNum2 = 0;
            randomNum3 = 0;
            scoreguest.innerHTML = `Score: 0`;
            scoreguesttotal.innerHTML = `Total Score: 0`;
        }
        else if(randomNum3 == 0){
            scoreguest.innerHTML = `Score: 0`;
            scoreguesttotal.innerHTML = `Total Score: 0`;
        } 
        else {

            if(randomNum2 == randomNum3){
                scoreguest.innerHTML = `Score: ${(randomNum2 + 1) * (randomNum3 + 1)}`;
                scoreguesttotal.innerHTML = `Total Score: ${(randomNum2 + 1) * (randomNum3 + 1)}`;    
            }
            else if (randomNum2 != randomNum3){
                scoreguest.innerHTML = `Score: ${(randomNum2 + 1) + (randomNum3 + 1)}`;
                scoreguesttotal.innerHTML = `Total Score: ${(randomNum2 + 1) + (randomNum3 + 1)}`;    
            }
        }
        count++;
        console.log(`roll ${count}`);
        round.innerHTML = `Round #${count}`;

        if (count == 2){

        } else if (count == 3){
   
        }
});
