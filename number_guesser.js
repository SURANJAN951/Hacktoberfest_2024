// Number Guesser Game
const readline = require('readline');

// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guesser Game!");
console.log("I'm thinking of a number between 1 and 100. Can you guess what it is?");

function askGuess() {
    rl.question('Enter your guess: ', (input) => {
        attempts++;
        let guess = parseInt(input);

        // Check if input is a valid number
        if (isNaN(guess)) {
            console.log("Invalid input. Please enter a valid number.");
        } else if (guess < targetNumber) {
            console.log("Too low! Try again.");
        } else if (guess > targetNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You've guessed the number ${targetNumber} correctly in ${attempts} attempts.`);
            rl.close();
            return;
        }
        // Continue asking for guesses
        askGuess();
    });
}

// Start the game
askGuess();
