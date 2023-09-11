const Avenger = require('./Avenger');

class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    }

    battle(damage) {
        for (let i = 0; i < this.avengers.length; i++) {
            const avenger = this.avengers[i];
            avenger.hp -= damage.damage;
            if (avenger.hp <= 0) {
                this.avengers.splice(i, 1);
                i--;
            }
        }
    }

    clone() {
        return new Team(this.id, this.avengers.map(avenger => ({ ...avenger })));
    }

    calculateLosses(clonedTeam) {
        const losses = clonedTeam.avengers.length - this.avengers.length;
        if (losses === 0) {
            console.log(`We haven't lost anyone in this battle!`);
        } else {
            console.log(`In this battle, we lost ${losses} Avenger(s).`);
        }
    }
}

module.exports = {Team};
