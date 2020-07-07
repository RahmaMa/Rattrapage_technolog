const mongoose = require('mongoose');
const schema  = mongoose.Schema({
    nom : String,
    description : String,
    ingredients : String,
    quantiteIngredients : int

})
module.exports = mongoose.model('pizza', schema);