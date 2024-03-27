const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    id_user: Number,
    taux_glycemique: String,
    date_time: Date,
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
