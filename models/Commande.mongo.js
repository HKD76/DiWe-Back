const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    id_materiel: Number,
    id_user: Number,
    date_time: Date,
});

const Commande = mongoose.model('Commande', CommandeSchema);

module.exports = Commande;
