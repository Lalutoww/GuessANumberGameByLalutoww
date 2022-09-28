function guessANumber() {
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let task = "";
    let level;
    let guess;
    let isHardcore = false;
    let difficulty = '';
    let tries = 0;
    let computerGuess = Math.random();
    let hardcoreOrNot = function(){
        rl.question("Default or Hardcore (5 tries only)? (D / H)",(choice) => {
            switch (choice) {
                case 'D': tries = Number.POSITIVE_INFINITY; isHardcore = false; challenge(); break;
                case 'H': tries = 5; isHardcore = true; challenge(); break;
                default: console.log("Wrong input"); hardcoreOrNot(); break;
            }
        });
    }
    hardcoreOrNot();
    let challenge = function(){
        rl.question("Choose difficulty (1, 2 or 3)",(option) => {
            switch (option) {
                case '1': difficulty = '1'; task = "0-100"; computerGuess = Math.floor(computerGuess * 100); game(); break;
                case '2': difficulty = '2'; task = "0-200"; computerGuess = Math.floor(computerGuess * 200); game(); break;
                case '3': difficulty = '3'; task = "0-300"; computerGuess = Math.floor(computerGuess * 300); game(); break;
                default: console.log("Wrong input"); challenge(); break;
            }
        });
    }
    challenge();

    let game = function () {
        rl.question(`Guess the number (${task})`, (input) => {
        guess = input;
        switch(difficulty){
            case '1': level = (guess <= 100 && guess >= 0); break;
            case '2': level = (guess <= 200 && guess >= 0); break;
            case '3': level = (guess <= 300 && guess >= 0); break;
        }
            if (level) {
                if (guess == computerGuess) {
                    console.log("You guessed the number. Congratulations!");
                    return rl.close();
                } else if (guess < computerGuess) {
                    console.log("Lower!");
                    if(isHardcore){
                        tries--;
                        console.log(`Remaining tries: ${tries}`);
                    }
                    game();
                } else if (guess > computerGuess) {
                    console.log("Higher!");
                    if(isHardcore){
                        tries--;
                        console.log(`Remaining tries: ${tries}`);
                    }                    
                    game();
                }if(tries === 0){
                    console.log("\nYou lost!");
                    return rl.close();
                }
            }else if(guess == "end"){
                rl.question("Are you sure you want to quit? Yes/No: ",(choice) => {
                    switch (choice) {
                        case 'Yes': return rl.close();
                        case 'No': game(); break;
                    }
                });
            } else {
                console.log("Invalid Input! Try again...");
                game();
            }
    });
  };
  game();
}
guessANumber();
