const Ordonnance = require('../models/Ordonnance.mongo.js')

const getOrdonnances = ((req, res) => {
    Ordonnance.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getOrdonnance = ((req, res) => {
    Ordonnance.findOne({ _id: req.params.ordonnanceID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Ordonnance not found'}))
})

const createOrdonnance = ((req, res) => {
    Ordonnance.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateOrdonnance = ((req, res) => {
    Ordonnance.findOneAndUpdate({ _id: req.params.ordonnanceID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Ordonnance not found' }))
})

const deleteOrdonnance = ((req, res) => {
    Ordonnance.findOneAndDelete({ _id: req.params.ordonnanceID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Ordonnance not found' }))
})

module.exports = {
    getOrdonnances,
    getOrdonnance,
    createOrdonnance,
    updateOrdonnance,
    deleteOrdonnance
}