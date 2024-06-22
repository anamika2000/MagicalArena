(async () => {
    const { expect } = await import('chai');
    const Player = await import('../player.js');
    const Game = await import('../game.js');

    function testGame() {
        const player1 = new Player.default('Player A', 50, 5, 10);
        const player2 = new Player.default('Player B', 100, 10, 5);

        const game = new Game.default(player1, player2);
        while (player1.isAlive() && player2.isAlive()) {
            game.playerTurn(player1, player2);
            if (!player2.isAlive()) break;
            game.playerTurn(player2, player1);
        }

        const winner = player1.isAlive() ? player1 : player2;
        expect(winner.isAlive()).to.be.true;
        expect(player1.isAlive() || player2.isAlive()).to.be.true;
    }

    testGame();

    console.log('All Game tests passed!');
})();
