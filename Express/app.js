const express = require("express")

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.status(200).send("This is homepage express app with harry")
});
app.get("/about", (req, res) => {
    res.send("This is aboutpage express app with harry")
});
app.post("/about", (req, res) => {
    res.send("This is aboutpage express app with harry")
});
app.get("/this", (req, res) => {
    res.status(404).send("Page Not Found")
});

app.listen(port, ()=>{
    console.log(`App started successfully on port ${port}`)
});

// #also installing nodemon from npm 