let playerOne = 0;
let playerTwo = 0;
let counter = 0;

while (counter <= 2) {
    const numPlayerOne = Math.floor(Math.random() * 5) + 1;
    const numPlayerTwo = Math.floor(Math.random() * 5) + 1;
    
    console.log(`На броcке ${counter + 1} первый игрок выкинул ${numPlayerOne}`);
    console.log(`На броcке ${counter + 1} второй игрок выкинул ${numPlayerTwo}`);
    console.log('---------------------------------------------------------');

    playerOne += numPlayerOne;
    playerTwo += numPlayerTwo;

    counter++;
}

console.log(`Result: \nPlayer one - ${playerOne} \nPlayer two - ${playerTwo}`);

if (playerOne > playerTwo) {
    console.log('Player one win');
} else if (playerOne < playerTwo) {
    console.log('Player two win');
} else {
    console.log('Draw'); 
}


