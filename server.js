const express = require('express')
const mongoose = require('mongoose')
const Livres = require('./models/pizza') // on importe notre model
let app = express(); // creation app server
let port = 3000;   // le port donné
mongoose.connect('mongodb://localhost:27017/livres', {useNewUrlParser: true});

app.get('/', function(req, res) {     // nous permet d'avoir la route par defaut
    res.send('Hello world !')});
      // recuperation de toute les pizza
app.get('/Pizza',async (req, res)=> {const pizza = await Pizza.find(); await res.json(pizza)});

// recuperation de toute les ingredients
app.get('/Ingredients',async (req, res)=> {const ingredients = await ingredients.find(); await res.json(ingredients)});

app.listen(port, () =>  { // ecoute du serveur sur le port 3000
    console.log('demarrage du serveur')
})

