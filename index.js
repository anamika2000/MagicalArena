const Player = require('./player');
const Game = require('./game');


//creating new player with health, strenght and attack value
const player1 = new Player('Player A', 50, 5, 10);
const player2 = new Player('Player B', 100, 10, 5);

//creating game object
const game = new Game(player1, player2);

game.MagicArena();   
