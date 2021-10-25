
const prompt = require('prompt-promise');
let Tree = require('./plant/tree');
let Bush = require('./plant/bush');
let Factory = require('./factory/factory');

let factory = new Factory();
let tree = [
    new Tree('Дуб', 150, 1),
    new Tree('Ясень', 140, 3),
    new Tree('Берёза', 90, 2),
    new Tree('Клён', 100, 2),
    new Tree('Сосна', 120, 3),
]

let bush = [
    new Bush('Малина', 20, 2),
    new Bush('Ежевика', 20, 2),
    new Bush('Смородина', 10, 3),
];

factory.addTreePool(tree);
factory.addBushPool(bush);

(async () => {
    const typePlant = String(await prompt(' Введите тип растения: '))
    const count = parseInt(await prompt(' Введите количество нужной продукции: '));
    factory.paidPlant(typePlant, count)
   

    
    prompt.finish();
})();