const Commande = require('../models/Commande.mongo.js')

const getCommandes = ((req, res) => {
    Commande.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getCommande = ((req, res) => {
    Commande.findOne({ _id: req.params.commandeID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Commande not found'}))
})

const createCommande = ((req, res) => {
    Commande.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateCommande = ((req, res) => {
    Commande.findOneAndUpdate({ _id: req.params.commandeID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Commande not found' }))
})

const deleteCommande = ((req, res) => {
    Commande.findOneAndDelete({ _id: req.params.commandeID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Commande not found' }))
})

module.exports = {
    getCommandes,
    getCommande,
    createCommande,
    updateCommande,
    deleteCommande
}