import { writeFileSync } from 'fs'
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date()
    writeFileSync("./logger/logger.txt", `${method}-${url}-${time}\n`, { flag: 'a' })
    next()
}
export {
    logger
}