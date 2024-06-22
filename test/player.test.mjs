(async () => {
    const { expect } = await import('chai');
    const Player = await import('../player.js');

    function testPlayer() {
        const player = new Player.default('Test', 100, 20, 15);
        expect(player.name).to.equal('Test');
        expect(player.health).to.equal(100);
        expect(player.strength).to.equal(20);
        expect(player.attack).to.equal(15);
    }

    function testPlayerReceiveDamage() {
        const player = new Player.default('Test', 100, 20, 15);
        player.receiveDamage(30);
        expect(player.health).to.equal(70);
    }

    function testPlayerHealth() {
        const player = new Player.default('Test', 100, 20, 15);
        player.receiveDamage(150);
        expect(player.health).to.equal(0);
    }

    function testPlayerIsAlive() {
        const player = new Player.default('Test', 100, 20, 15);
        expect(player.isAlive()).to.be.true;
        player.receiveDamage(100);
        expect(player.isAlive()).to.be.false;
    }

    testPlayer();
    testPlayerReceiveDamage();
    testPlayerHealth();
    testPlayerIsAlive();

    console.log('All Player tests passed!');
})();
