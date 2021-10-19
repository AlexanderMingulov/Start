// task one
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reverse());

// task two
const arrTwo = [3, 67, 15, 32, 124, -9, 10];
console.log(Math.max.apply(null, arrTwo ));

// task three

const resultForTaskThree = (start, length) => {
    let startArray = [1, 1];

    if (length <= 2) { 

        return startArray; 

    } else {

        for (i = 0; i < (start + length); i++) { 
            startArray.push(startArray[startArray.length - 1] + startArray[startArray.length - 2]); 
        }
    }
    
    return startArray.slice(start, length);

}

console.log(resultForTaskThree(0, 6));

// task five
const sortAsc = arrTwo.sort(function(a, b) {
    return a - b;
});
const sortDesc = arrTwo.sort(function(a, b) {
    return b-a;
});

console.log(sortAsc);
console.log(sortDesc);

// task four
const arr_1 = [3, 4, 8 , 7]
const arr_2 = [3, 7, 9 , 4]
const defaultObject = {
    match: 0,
    execute: 0,
}

const taskFour = arr_1.reduce((accum, currentValue, index, array) => {
    if (arr_2.includes(currentValue)) {
        accum.match++
    } 

    if ((arr_2.includes(currentValue) && index === arr_2.indexOf(currentValue))) {
        accum.execute++
    }

    return accum
   
}, defaultObject)



console.log(taskFour);

//task six
const arrThree = [1, 5, 1, 8, 4, 5, 9, 9, 9]
const deleteDoubleItemInArray =  arrThree.filter((item, index) => {
    console.log(item, index);
    return arrThree.indexOf(item) === index
})

console.log(deleteDoubleItemInArray);

