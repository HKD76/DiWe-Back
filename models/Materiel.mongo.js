const mongoose = require('mongoose');

const MaterielSchema = new mongoose.Schema({
    name: String,
    type_materiel: String,
    info_materiel: String,
    stock: Number,
    image: String,
});

const Materiel = mongoose.model('Materiel', MaterielSchema);

module.exports = Materiel;
