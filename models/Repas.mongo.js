const mongoose = require('mongoose');

const RepasSchema = new mongoose.Schema({
    id_user: Number,
    name: String,
    data_tbd: String,
});

const Repas = mongoose.model('Repas', RepasSchema);

module.exports = Repas;
