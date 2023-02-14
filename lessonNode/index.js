import express from "express";
import path from "path";
import fs from "fs"


const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve("files/fullInfo.json"))

})
app.post('/', (req, res) => {
    const fullInfo = fs.readFileSync('./files/fullInfo.json', 'utf8');
    const myfullInfo = JSON.parse(fullInfo);
    myfullInfo.push({
        "id": 8,
        "firstName": "Khachik",
        "lastName": "Matevosyan",
        "address": "Address1",
        "phoneNumber": "PhoneNumber1",
        "email": "Email1",
        "rates": {
            "Mathemathics": 5,
            "English": 2,
            "Physics": 3,
            "Geography": 6,
            "Algorithms": 2
        }
    })
    const newInfo = JSON.stringify(myfullInfo);
    fs.writeFileSync('files/fullInfo.json', newInfo);
    res.send("user successfully created");
})
app.use('/ping', (request, response) => {
    response.send('pong');
});
app.listen(3001)