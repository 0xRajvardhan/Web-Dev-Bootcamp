// Inseting data in mongo db

use harryKart

db.item.insertOne({name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.item.insertMany([{name:"Samsung 10s", price: 32000, rating: 4.0, qty: 199, sold: 50}, {name:"Moto 30s", price: 12000, rating: 3.5, qty: 133, sold: 84}])

db.items.find()  // If you want to see the date

db.dropDatabase() // Deletes current database you are working on