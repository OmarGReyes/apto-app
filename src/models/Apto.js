const mongoose = require('mongoose');

const {Schema} = mongoose;

let AptoSchema = new Schema({
    Titulo : { type: String, required: true},
    Descripcion : {type: String, required: true},
    Latitud : {type: Number, required: true},
    Logitud : {type: Number, required: true},
    ID : {type: String, required: true},
    Precio : {type: Number, required: true},
    Habitaciones : {type: Number, required: true},
    Baños : {type: String, required: true},
});

AptoSchema.methods.allAptos = async () => {await AptoSchema.find().lean()}

module.exports = mongoose.model('Apto',AptoSchema,'aptos')