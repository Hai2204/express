import express from 'express'
import mongoo from 'mongoose'
import 'dotenv/config'
import { logger } from './logger.js';
import { routeLogin } from './router/login.js';
import { routeUser } from './router/user.js';

const app = express()

// app.listen
app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
})
// logger
app.use(logger)
// connect mongoo
mongoo.connect(process.env.MONGODB_URI)

mongoo.connection.on("connected", () => {
    console.log("Connect database successfully...");
    
    // route login
    // type req
    app.use(express.json())
    //app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    
    
    // morgan
    // app.use(morgan('tiny'))
    
    
    
    // ap user
    app.use("/user/", routeUser)
    
    // ap login
    app.use("/login", routeLogin)
    
    app.get('*', (req, res) => {
        res.status(404).send("<h1>Not found</h1>")
    })
    // app.use
})

mongoo.connection.on("error" , (err) => {
    console.log('error nef',err);
})


