let Tree = require('../plant/tree');
class Factory {
    constructor() {
        this.treePool = [];
        this.bushPool = [];
    }

    addTree(tree) {
        this.treePool.push(tree);
    }

    addBush(bush) {
        this.bushPool.push(bush);
    }

    addTreePool(trees) {
        this.treePool = [...this.treePool, ...trees];
    }

    addBushPool(bushes) {
        this.bushPool = [...this.bushPool, ...bushes];
    }

   
    
    treeFiter(size) {
        return this.treePool.filter((tree) => tree.getSize() >= size);
    }

    bushFiter(weight, type = null) {
            return this.bushPool.filter((bush) => {
                if (type) {
                    return bush.getWeightFetus() >= weight && bush.getPlantType() === type
                } else {
                    return bush.getWeightFetus() >= weight
                }
                
            });
    }

    countPlantOnFactory() {
        return this.treePool.length + this.bushPool.length
    }

    getAllPlant() {
        return [...this.bushPool, ...this.treePool]
    }

    paidPlant(type, count) {
        const searchingPlant = this.getAllPlant().find((plant) => {
            return plant.getPlantType() === type
        })

        if(searchingPlant) {
            const result = count * searchingPlant.getCost()
            const isTree = searchingPlant instanceof Tree
        

            console.log(`${type} в количестве ${count} ${isTree ? 'шт.' : 'кг'} продано за ${result}$`);
        } else {
            console.log('Искомого растения нет в продаже');
        }
        
        
    }
}



module.exports = Factory;