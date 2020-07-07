let recettePizza = new Schema({
    id : String,
    lastName : { type : String, required : true},
    firstName : String,
    SSN : { type : String, required : true}
});