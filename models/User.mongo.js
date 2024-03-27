const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    code_pin: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
