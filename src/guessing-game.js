class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.guessing;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        this.guessing = Math.round((this.max - this.min) / 2);
        return this.guessing;
    }
    lower() {
        this.max = this.guessing;
    }
    greater() {
        this.min = -this.guessing;
    }
}
module.exports = GuessingGame;
