function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

const generatePartNumber = (number, countPart, isFloat) => {
    const part = [];
    let sum = 0;
    const min = 1;
    const max = number-countPart;

    do {

        if(sum > number || part.length > countPart) {
            sum -= part[0]
            part.shift()
            continue;
        }

        if(isFloat) {
            part.push(getRandomFloat(min, max))
        } else {
            part.push(getRandomInRange(min, max))
        }

        sum = part.map((i) => x += i, x = 0).reverse()[0];
        
    } while (!(part.length === countPart && sum === number))

    console.log(part);

}

generatePartNumber(10, 3, true)
generatePartNumber(10, 3, false)
