function guessingGame() {
    let attempts = 0;
    let number = Math.floor(Math.random() * 100);
    let won = false;

    return function game(guess){
        if(won) return "The game is over, you already won!"
            attempts++;
        if(guess === number){
            won = true;
            return `You win! You found ${number} in ${attempts} guesses.`
        }
        if(guess > number){
            return `${guess} is too high!`
        }
        if(guess < number) {
            return `${guess} is too low!`
        }
        else {
            return "Never recieved a guess."
        }
    }
};

let game = guessingGame();



module.exports = { guessingGame };
