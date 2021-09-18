const fs = require('fs-extra')

const dir = '/tmp'
const file = '/tmp/file.txt'
const dir2 = '/tmp2'
const dirOver = '/tmp2/file.txt'

fs.ensureDir(dir)
    .then(() => fs.outputFile(file, 'hello!'))
    .then(() => fs.ensureDir(dir2))
    .then(() => fs.move(file, dirOver, { overwrite: true }))
    .then(() => {
        fs.remove(dir)
        fs.remove(dir2)
    })
    .then(() => console.log('succsesfull!!!111'))
    .catch((err) => console.log(err))

console.log('homework2');

