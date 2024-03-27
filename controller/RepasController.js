const Repas = require('../models/Repas.mongo.js')

const getRepass = ((req, res) => {
    Repas.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getRepas = ((req, res) => {
    Repas.findOne({ _id: req.params.repasID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Repas not found'}))
})

const createRepas = ((req, res) => {
    Repas.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateRepas = ((req, res) => {
    Repas.findOneAndUpdate({ _id: req.params.repasID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Repas not found' }))
})

const deleteRepas = ((req, res) => {
    Repas.findOneAndDelete({ _id: req.params.repasID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Repas not found' }))
})

module.exports = {
    getRepass,
    getRepas,
    createRepas,
    updateRepas,
    deleteRepas
}