//----------------------------------------------------------------- game { object }
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}



//---------------------------------------------------------------------- newGame()
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
};

//--------------------------------------------------------------------- addTurn()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns()
}

// showTurns()

//-------------------------------------------------------------------- lightsOn()
function showScore() {
    document.getElementById('score').innerText = game.score;
}

// playerTurn()

//------------------------------------------------------------------- showScore()
function lightsOn(circ) {
    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');   
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };