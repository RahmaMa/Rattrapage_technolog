const express = require('express')
const mongoose = require('mongoose')
const pizza = require('./models/pizza') // on importe notre model
const body = require('body-parser')
app.use(body())
let app = express(); // creation app server
let port = 3000;   // le port donné

mongoose.connect('mongodb://localhost:3000/gestionPizza', {useNewUrlParser: true});

app.get('/', function(req, res) {     // nous permet d'avoir la route par defaut
    res.send('Hello world !')});
      // recuperation de toute les pizza
app.get('/Pizza',async (req, res)=> {const pizza = await Pizza.find(); await res.json(pizza)});

// recuperation de toute les ingredients
app.get('/Ingredients',async (req, res)=> {const ingredients = await ingredients.find(); await res.json(ingredients)});

app.listen(port, () =>  { // ecoute du serveur sur le port 3000
    console.log('demarrage du serveur')
});
// la connexion avec le fichier index.html
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(300);

app.post('/', async (req, res) => {
    const nom = req.body.nom; // récupération des variables du body
    const description = req.body.description
    const ingredients = req.body.ingredients
    const quantiteIngredients = req.body.quantiteIngredients


    if (!nom || ! description || !ingrédients) { // on vérifie que les trois variables sont présentes
        res.send('Il manque un argument')
        return
    }

    const newRecette= new Recettes({ // création d'un objet représentant notre nouvelle recette
        nom: nom,
        description : description ,
        ingrédients: ingrédients
    })

    await newRecette.save() // sauvegarde asynchrone du nouveau livre
    res.json(newRecette)
    return

});
