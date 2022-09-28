function guessANumber() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let task = "";
    let level;
    let guess;
    let difficulty = '';
    let computerGuess = Math.random();
    readline.question("Choose difficulty (1, 2 or 3)",(option) => {
        switch (option) {
            case '1': difficulty = '1'; task = "0-100"; computerGuess = Math.floor(computerGuess * 100); game(); break;
            case '2': difficulty = '2'; task = "0-150"; computerGuess = Math.floor(computerGuess * 150); game(); break;
            case '3': difficulty = '3'; task = "0-200"; computerGuess = Math.floor(computerGuess * 200); game(); break;
        }
    });

    let game = function () {
        readline.question(`Guess the number (${task})`, (number) => {
        guess = Number(number);
        switch(difficulty){
            case '1': level = (guess <= 100 && guess >= 0); break;
            case '2': level = (guess <= 150 && guess >= 0); break;
            case '3': level = (guess <= 200 && guess >= 0); break;
        }
            if (level) {
                if (guess == computerGuess) {
                    console.log("You guessed the number. Congratulations!");
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log("Too Low!");
                    game();
                } else if (guess > computerGuess) {
                    console.log("Too High!");
                    game();
                }
            } else {
                console.log("Invalid Input! Try again...");
                game();
            }
       // }
       /* if ((level == "level 2")) {
            if (guess <= 150 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log("You guessed the number. Congratulations!");
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log("Too Low!");
                    game();
                } else if (guess > computerGuess) {
                    console.log("Too High!");
                    game();
                }
            } else {
                console.log("Invalid Input! Try again...");
                game();
            }
        } */
    });
  };
  game();
}
guessANumber();
