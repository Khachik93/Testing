import express from "express";
import bodyParser from "body-parser"
import router from "./routes/index.js"


const port = 3001;
const app = express();

app.use('/', router);
app.use(bodyParser.json());
app.use('/ping', (request, response) => {
    response.send('pong');
});




app.listen(port, () => {
    console.log(`Listining http://localhost:${port}`)
})