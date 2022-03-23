import express from 'express'
import 'dotenv/config'

const app = express()

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
})
// app.get
app.get('/', (req, res) => {
    res.send("Home page")
})
app.get('/about', (req, res) => {
    res.send("About page")
})
// app.post
// app.put
// app.delete
// app.all
app.get('*', (req, res) => {
    res.status(404).send("<h1>Not found</h1>")
})
// app.use
// app.listen
