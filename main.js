const fs = require('fs-extra')

const dir = '/tmp'
const file = '/tmp/file.txt'
const dir2 = '/tmp2'
const dirOver = '/tmp2/file.txt'

fs.ensureDir(dir, (err) => {
    if(err) return console.log(err);
    fs.outputFile(file, 'hello world!!', (err) => {
        if(err) return console.log(err);
        fs.ensureDir(dir2, (err) => {
            if(err) return console.log(err);
            fs.move(file, dirOver, { overwrite: true }, (err) => {
                if(err) return console.log(err);
                fs.remove(dir, (err) => {
                    if(err) return console.log(err);
                    fs.remove(dir2, (err) => {
                        if(err) {
                            console.log(err);
                    
                        } else { 
                            console.log('succesfull!')
                        }
                    }) 
                })  
            })
        })
    })
})





// fs.ensureDir(dir)
//     .then(() => fs.outputFile(file, 'hello!'))
//     .then(() => fs.ensureDir(dir2))
//     .then(() => fs.move(file, dirOver, { overwrite: true }))
//     .then(() => {
//         fs.remove(dir)
//         fs.remove(dir2)
//     })
//     .then(() => console.log('succsesfull!!!'))
//     .catch((err) => console.log(err))



