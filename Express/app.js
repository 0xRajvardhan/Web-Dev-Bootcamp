const express = require("express")

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("This is homepage express app with harry")
})
app.get("/about", (req, res) => {
    res.send("This is aboutpage express app with harry")
})

app.listen(port, ()=>{
    console.log(`App started successfully on port ${port}`)
})