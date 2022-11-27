// Imported a built in module 
const fs = require("fs");

// Command for reading a file 
let text = fs.readFileSync("delete.txt", "utf-8");

// Seeing the file 
console.log("The content of the file is ");
console.log(text);

// Replacing or rewriting the text in the file 
text = text.replace("browser", "rohan");

// Creating a new file with new changes by using this write command 
console.log("Creating a new file");
fs.writeFileSync("rohan.txt", text);

// calling the new file 
let file = fs.readFileSync("rohan.txt", "utf-8");
// seeing the new file 
console.log(file);