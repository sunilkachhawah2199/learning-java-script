

let number=50;
let guess;

while(guess!==number){
    guess=parseInt(prompt("Enter your guess"));
    if(guess>number){
        alert("Your guess is too high");
    }
    else if(guess<number){
        alert("Your guess is too low");
    }
    else{
        alert("Congrats! You guessed it right");
    }
}