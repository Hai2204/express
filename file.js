import file from 'fs'
import util from 'util'

const readFilePromise = util.promisify(file.readFile)

// const getText = (text) => {
//     return new Promise((resolve, reject) => {
//         file.readFile(text, 'utf-8', (err, data) => {
//             if (!!err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText("./files/text.txt").then((text) => {
//     console.log(text);
// }).catch((err) => {
//     console.log('err',err);
// }).finally(() => {
//     console.log('ReadFile success...');
// })

const start = async () => {
    const fileText = await readFilePromise("./files/text.txt", 'utf-8')
    return fileText
}

start().then(text => console.log('success..', text)).catch((err) => console.log(err))