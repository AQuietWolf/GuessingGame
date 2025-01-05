const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingnumber");
const checkButton = form.querySelector("#check-button");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const container = document.querySelector(".container");

let cnt=0;
let wins=0;
let losses=0;

form.addEventListener("submit",
    ()=>{
        event.preventDefault();
        cnt++;
        let randomNumber = generateRandomNumber(5,1);
        if(guessingNumber.value==randomNumber){
            wins++;
            resultText.style.color="lightgreen"
            resultText.innerHTML="bingo,, you got it right";
        }
        else{
            losses++;
            resultText.style.color="red";
            resultText.innerHTML="you have guessed wrong , correct ans is "+randomNumber;
        }

        if(losses<=1){
            remainingAttempts.innerHTML=(5-cnt)+" attempts left";
        }
        else if(losses==2){
            remainingAttempts.innerHTML="if you guess this wrong, you die son of a bitch";
        }


        if(cnt==5 || wins>5-cnt || losses>5-cnt){
            if(wins>losses){
                remainingAttempts.style.fontSize="2rem";
                remainingAttempts.innerHTML="hoorraahhh";
                container.style.background="lightgreen";
            }
            else{
                remainingAttempts.style.fontSize="2rem";
                remainingAttempts.innerHTML="fuck off loser"
                container.style.backgroundColor="red";
            }
            guessingNumber.disabled = true;
            checkButton.disabled = true;
        }      
    }
)

function generateRandomNumber(maximum,minimum){
    let randomNumber = Math.floor(Math.random()*(maximum-minimum+1))+minimum;
    return randomNumber;
}