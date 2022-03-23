import http from 'http'
import 'dotenv/config'
import { createReadStream, readFileSync } from 'fs'


const server = http.createServer((req, res) => {
    // const text = readFileSync("./files/bigFile.txt", 'utf-8')
    // res.end(text)
    console.log(res);
    const fileStream = createReadStream("./files/bigFile.txt", 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })

})

server.listen(process.env.PORT)