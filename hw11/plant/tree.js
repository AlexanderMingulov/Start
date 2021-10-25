const Plant = require('./plant');

class Tree extends Plant {
    constructor(plantType, plantCost, treeSize) {
        super(plantType, plantCost);
        if (treeSize === 1 || treeSize === 2 || treeSize === 3) {
            this.treeSize = treeSize
        } else {
            throw new Error ('Неверный размеер дерева')
        }
    }

    // set treeSize(size) {
    //     const isValidSize =  size === 1 || size === 2 || size === 3
    //      if (!isValidSize) {
    //          throw new Error ('Неверный размеер дерева')
    //      } else {
    //          this._treeSize = size
    //      }
    // }

    // get treeSize() {
    //     if (this._treeSize === 1) {
    //         return 'маленькое'
    //     } else if(this._treeSize === 2) {
    //         return 'среднее'
    //     } else if(this._treeSize === 3) {
    //         return 'большое'
    //     }
    // }

    treeSize() {
        return this.treeSize;
    }

    toString() {
        return `The tree '${this.plantType}' has cost '${this.plantCost}'`
    }
}

module.exports = Tree;