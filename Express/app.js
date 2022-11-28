const express = require("express")
const path = require("path")
const app = express();
const port = 80;

// For serving static files 
app.use('/static', express.static('static'))

// Setting the template engine as pug 
app.set('view engine', 'pug')

// Set the views directory 
app.set('views', path.join(__dirname, 'views'))

// Pug demo endpoint 
app.get("/demo", (req, res) => {
        res.status(200).render('demo', { title: 'Hey', message: 'Hello there, I am learning how to use pug!' })
      });

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