import http from 'http'
import 'dotenv/config'


const server = http.createServer((req, res) => {
    console.log(`log`);
    switch (req.url) {
        case "/":
            res.end("Welcome to our  home page")
            break;
        case "/about":
            res.end("Here is our short History 1")
            break;
        default:
            res.end("Can't find url")
            break;
    }
    console.log(`log`);
})
console.log(process.env.PORT);
server.listen(process.env.PORT || 5000, function () {
    // logger.api.info(`Server listening on port ${server.address().port}`);
    console.log(`Server listening on port ${server.address().port}`);
});
