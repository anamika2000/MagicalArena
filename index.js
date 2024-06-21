const Player = require('./player');
const Game = require('./game');

const player1 = new Player('Player A', 40, 10, 5);
const player2 = new Player('Player B', 40, 10, 5);

const game = new Game(player1, player2);

game.MagicArena();   
