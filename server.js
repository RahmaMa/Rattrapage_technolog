const express = require('express')
let app = express(); // creation app server
let port = 3000;   // le port donné

app.get('/', function(req, res) {     // nous permet d'avoir la route par defaut
    res.send('Hello world  ! ')
})


app.listen(port, () =>  { // ecoute du serveur sur le port 3000
    console.log('demarrage du serveur')
})