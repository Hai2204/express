import express from 'express'
const router = express.Router()

// for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.post('/', (req, res) => {

    const { name } = req.body
    if (!!name) return res.status(200).send("Hello " + name)
    return res.status(401).send("Unauthorized,Pless enter name!!!")
})


export {
    router as routeLogin
}