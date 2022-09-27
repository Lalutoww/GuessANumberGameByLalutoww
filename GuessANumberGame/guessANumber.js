function guessANumber(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random()* 100);
    let guess;

    let question = function(){
        readline.question('Guess the number (1-100): ', number =>
        {
            guess = Number(number);
            if(guess <= 100 && guess >= 0){
                if(guess == computerGuess){
                    console.log("You guessed the number. Congratulations!");
                    return readline.close();
                } else if(guess < computerGuess){
                    console.log("Too Low!");
                    question();
                } else if(guess > computerGuess){
                    console.log("Too High!");
                    question();
                }
            }   else {
                console.log("Invalid Input! Try again...");
                question();
            }

        });
    }
    question();
}
guessANumber()