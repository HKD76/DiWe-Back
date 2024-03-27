const mongoose = require('mongoose');

const OrdonnanceSchema = new mongoose.Schema({
    id_user: Number,
    ordonnance: String, 
});

const Ordonnance = mongoose.model('Ordonnance', OrdonnanceSchema);

module.exports = Ordonnance;
