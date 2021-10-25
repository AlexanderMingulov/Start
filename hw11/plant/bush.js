const Plant = require('./plant');

class Bush extends Plant {
    constructor(plantType, plantCost, weightFetus) {
        super(plantType, plantCost);
        this.weightFetus = weightFetus;
    }

    weightFetus() {
        return this.weightFetus;
    }

    changeWeight(weight) {
        this.weightFetus = weight
    }

    toString() {
        return `The bush '${this.plantType}' has cost '${this.plantCost}'`
    }
}

module.exports = Bush;