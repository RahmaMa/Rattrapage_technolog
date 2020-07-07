const mongoose = require('mongoose');
const schema  = mongoose.Schema({
    nom : String,
    mesure : number,
    desciption : String,
    cuisson : int

})
module.exports = mongoose.model('ingredient', schema);