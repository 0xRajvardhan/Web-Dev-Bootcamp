const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();
const port = 80;

// EXPRESS RELATED CONFIG 
app.use('/static', express.static('static')) // For serving static files 
app.use(express.urlencoded())

// PUG RELATED CONFIG 
app.set('view engine', 'pug') // Setting the template engine as pug 
app.set('views', path.join(__dirname, 'views')) // Set the views directory 

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content"
    const params = { 'title': 'pubg is the best game', 'content': con }
    res.status(200).render('index.pug', params)
})


app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of our client is ${name},\n${age} years, \n${gender}, \nResiding in ${address}. \nMore about them: ${more}`

    fs.writeFileSync('output.txt', outputToWrite)
    
    const params = { 'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params)
})



// START THE SERVER 
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`)
});

// #also installing nodemon from npm 