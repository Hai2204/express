import http from 'http'
import 'dotenv/config'
import { readFileSync } from 'fs'

const homePage = readFileSync("./index.html")

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plane' })
        res.write(homePage)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Not found</h1>')
        res.end()
    }
})

server.listen(process.env.PORT)