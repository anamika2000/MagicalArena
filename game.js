const Player = require('./player');
const Dice = require('./dice');

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.dice = new Dice();
    }

    
    playerTurn(attacker, defender) {
        // rolling dice
        const attackRoll = this.dice.roll();
        const defendRoll = this.dice.roll();
        
        //calculating damage
        const attackDamage = attacker.attack * attackRoll;
        const defenseStrength = defender.strength * defendRoll;
        const damage = Math.max(0, attackDamage - defenseStrength);

        defender.receiveDamage(damage);

        console.log(`${attacker.name} turn`) 
        console.log(`Dice roll value ${attackRoll}, Damage: ${attackDamage}`);
        console.log(`Defender's Dice roll Value ${defendRoll}, Defense: ${defenseStrength}`);
        console.log(`${defender.name}'s Damage is ${damage} and now Health is ${defender.health}\n`);
    }
    
    MagicArena() {
        let attacker = this.player1.health < this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.playerTurn(attacker, defender);
            
            [attacker, defender] = [defender, attacker];
        }

        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(`${winner.name} wins the game!`);
    }
}

module.exports = Game;
