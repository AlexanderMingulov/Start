class Plant {
    constructor(plantType, plantCost) {
        this.plantType = plantType;
        this.plantCost = plantCost;
    }
    getCost() {
        return this.plantCost
    }


    changeCost(plantCost) {
        this.plantCost = plantCost;
    }
    
    getPlantType() {
        return this.plantType.toString()
    }

    toString() {
        return `The plant '${this.plantType}' has cost ${this.plantCost}`;
}
}

module.exports = Plant;